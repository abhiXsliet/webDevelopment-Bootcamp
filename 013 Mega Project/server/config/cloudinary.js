const cloudinary = require('cloudinary').v2;

exports.cloudinaryConnect = () => {
    try {
        cloudinary.config({
            //Configuring the cloudinary to Upload MEDIA
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        });
    } catch (error) {
        console.error(error);
    }
};