const Section = require('../models/Section');
const Course = require('../models/Course');

//Create a new section
exports.createSection = async (req, res) => {
    try {
        //data fetch 
        const {sectionName, courseId} = req.body;
        //data validation
        if(!sectionName || !courseId) {
            return res.status(400).json({
                success: false,
                message: 'Missing required properties'
            });
        }
        //create a new section
        const newSection = await Section.create({sectionName});
        //update course with setion objectID
        const updatedCourseDetails = await Course.findByIdAndUpdate(
            courseId,
            {
                $push: {
                    courseContent: newSection._id,
                }
            },
            {new: true},
        )
        //HW: use populate to replace section /sub-section both in the updatedCourseDetails
            .populate({
                path: "courseContent",
                populate: {
                    path: "subSection",
                },
            })
            .exec();

        //return updated course object in response
        return res.status(200).json({
            success: true,
            message: 'Section Created Successfully',
            updatedCourseDetails,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
}

//Update a section
exports.updateSection = async (req, res) => {
    try {
        //data input 
        const {sectionName, sectionId} = req.body;
        //data validation
        if(!sectionName || !sectionId) {
            return res.status(400).json({
                success: false,
                message: 'Missing Properties'
            });
        }
        //update data
        const section = await Section.findByIdAndUpdate(sectionId, {sectionName}, {new: true});
        //return response
        return res.status(200).json({
            success: true,
            message: section,
        })

    } catch(error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to Update Section, please try again',
            error: error.message,
        })
    }
};

//Delete a section
exports.deleteSection = async (req, res) => {
    try {
        //HW -> assuming that we are sending ID in params
        const {sectionId} = req.body;
        //use findByIdAndDelete
        await Section.findByIdAndDelete(sectionId);
        //TODO -> Update the course too.
        //return response
        return res.status(200).json({
            success: true,
            message: 'Section deleted successfully',
        })

    } catch(error) {
        console.log("Error while deleting section", error);
        return res.status(500).json({
            success: false,
            message: 'Unable to delete Section, please try again',
            error: error.message,
        })
    }
}