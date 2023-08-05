//app create
const express = require('express');
const app = express();

//find the port number
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//add middleware 
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

//to connect with db
const db = require("./config/database");
db.connect();

//to connect with cloud
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mounting
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

//Activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
}) 
