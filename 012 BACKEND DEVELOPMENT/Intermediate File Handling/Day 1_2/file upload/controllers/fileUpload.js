const File = require('../models/File');
const cloudinary = require('cloudinary').v2;

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
        
    const options = {folder};
    console.log("temp file path:", file.tempFilePath);

    if(quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);

}

//localfileupload -> handler function
exports.localFileUpload = async (req, res) => {
    try {
        
        //fetch the file
        const file = req.files.file;
        console.log("FILE HAS ARRIVED -> ", file);

        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH -> ", path);

        //add path to the move function
        file.mv(path, (err) => {
            console.log(err);
        });
        
        //create a successful response
        res.json({
            success: true,
            message: "Local File Uploaded successfully"
        })

    } catch (error) {
        console.log("Not able to upload file on server");
        console.log(error);
    }
}


//image upload ka handler
exports.imageUpload = async (req, res) => {
    try {
        //data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg", 'jpeg', "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File type: " , fileType);

        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            })
        }

        //file format is supported
        console.log("Uploading image file to codehelp folder");
        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        //save entry into db
        const fileData = await File.create({
            name, 
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image successfully uploaded"
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong uploading",
        });
    }
}

//video upload handler
exports.videoUpload = async (req, res) => {
    try {

        //data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;

        //validation
        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File type: " , fileType);


        //TODO : add a upperlimit of 5Mb for video files
        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            })
        }

        //file format supported hai
        console.log("Uploading video file to Codehelp folder");
        const response = await uploadFileToCloudinary(file, "Codehelp");
        console.log(response);

        //db me entry save akrni hai
        const fileData = await File.create({
            name, 
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Video uploaded successfully"
        });

        
    } catch(error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong in video uploading",
        })
    }
}

//imageSizeReducer handler
exports.imageSizeReducer = async (req, res) => {

    try {
        //data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg", 'jpeg', "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File type: " , fileType);

        //TODO: add a upper limit here
        if(!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            })
        }

        //file format supported hai
        console.log("Uploading reduced image file to codehelp folder");
        //HW -> reduce quality using height and width
        const response = await uploadFileToCloudinary(file, "Codehelp", 30);
        console.log(response);

        //db me entry save akrni hai
        const fileData = await File.create({
            name, 
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image successfully uploaded"
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong uploading",
        });
    }
}