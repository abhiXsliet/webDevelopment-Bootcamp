const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender');
const emailTemplate = require('../mail/templates/emailVerificationTemplate');

const OTPSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 60 * 5, //The document will be automatically deleted after 5-minutes of its creation
    },
});

//async function -> to send emails
async function sendVerificationEMail(email, otp) {
    //Create a transporter to send emails

    //Define the email options

    //send the email
    try {
        const mailResponse = await mailSender(
            email, 
            "Verification Email from StudyNotion", 
            emailTemplate(otp)
        );
        console.log("Email sent successfully", mailResponse.response);
    } catch (error) {
        console.log("Error occured while sending verification email", error);
        throw error;
    }
}

//Defining a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function(next) {
    console.log("New document saved to the database");

    //only send an email when a new document is created 
    if(this.isNew) {
        await sendVerificationEMail(this.email, this.otp);
    }
    next();
}) 

// module.exports = mongoose.model("OTP", OTPSchema);

const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;