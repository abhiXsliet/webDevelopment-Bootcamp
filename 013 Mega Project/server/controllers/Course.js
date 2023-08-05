const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const {uploadImageToCloudinary} = require("../utils/imageUploader");

//function to create a new Course
exports.createCourse = async (req, res) => {
    try {
        //Get user Id from request object
        const userId = req.user.id;

        //Get all required fields from request body
        let {
            courseName, 
            courseDescription, 
            whatYouWillLearn, 
            price, 
            tag,
            category,
            status,
            instructions,
        } = req.body;

        //get thumbnail image from request files
        const thumbnail = req.files.thumbnailImage;

        //validation -> check if any of the required fields are missing
        if(
            !courseName || 
            !courseDescription || 
            !whatYouWillLearn || 
            !price || 
            !tag || 
            !thumbnail || 
            !category
        ) {
            res.status(400).json({
                success: false,
                message: 'All Filds are mandatory',
            });
        }
        if(!status || status === undefined) {
            status = "Draft";
        } 
        //TODO: add pending and approval of status based on admin approval

        //check if the user is an instructor
        const instructorDetails = await User.findById(userId, {
            accountType: "Instructor",
        });
        console.log("Instructor Details: " , instructorDetails);
        //TODO: Verify that userId and instructorDetails._id are same or different-> ?

        if(!instructorDetails) {
            return res.status(404).json({
                success: false,
                Message: 'Instructor Details Not Found',
            });
        }

        //check given Category is valid or not
        const categoryDetails = await Category.findById(category);
        if(!categoryDetails) {
            return res.status(404).json({
                success: false,
                message: 'Category Details Not Found',
            })
        }

        //Upload thumbnail Image to Cloudinary
        const thumbnailImage = await uploadImageToCloudinary(
            thumbnail, 
            process.env.FOLDER_NAME
        );
        console.log(thumbnailImage);
        //create an entry for new Course with the given details
        const newCourse = await Course.create ({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn: whatYouWillLearn,
            price,
            tag: tag,
            Category: categoryDetails._id,
            thumbnail: thumbnailImage.secure_url,
            status: status,
            instructions: instructions,
        });

        //add the new Course to the user schema of instructor
        await User.findByIdAndUpdate(

            {_id: instructorDetails._id},
            {
                $push : {
                    courses : newCourse._id,
                }
            },
            {new : true},
        );

        //Add the new course to the categories
        await Category.findByIdAndUpdate(
            { _id: category },
            {
                $push: {
                    course: newCourse._id,
                },
            },
            { new : true }
        );

        //Return the new course and a success message
        res.status(200).json({
            success: true,
            data: newCourse,
            message: "Course Created Successfully",
        });

    } catch(error) {
        //Handle any errors that occur during the creation of the course
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to Create Course',
            error: error.message,            
        });
    }
};

//getAllCourses handler function
exports.getAllCourses = async (req, res) => {
    try {
        const allCourses = await Course.find(
            {}, 
            {
                courseName: true,
                price: true,
                thumbnail: true,
                instructor: true,
                ratingAndReviews: true,
                studentsEnrolled: true,
            }
        )
            .populate("instructor")
            .exec();
        return res.status(200).json({
            success: true,
            message: 'Data for all Courses Fetched Successfully',
            data: allCourses,
        })
                                
    } catch( error ) {
        console.log(error);
        return res.status(404).json({
            success: false,
            message: `Cannot Fetch Course Data`, 
            error: error.message,
        });
    }
};

//getCourseDetails
exports.getCourseDetails = async (req, res) => {
    try {
        //get id
        const {courseId} = req.body;
        //find course details
        const courseDetails = await Course.find(
            {_id:courseId}
        )
        .populate(
            {
                path: "instructor",
                populate:{
                    path: "additionalDetails",
                },
            }
        )
        .populate("category")
        // .populate("ratingAndReviews")
        .populate({
            path: "courseContent",
            populate:{
                path: "subSection",
            },
        })
        .exec();

        //validation
        if(!courseDetails) {
            return res.status(400).json({
                success: false,
                message: `Could not find the course with ${courseId}`,
            });
        }

        //return response
        return res.status(200).json({
            success: true,
            message: "Course Details Fetched Successfully",
            data: courseDetails,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};