const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//signup router handler
exports.signup = async (req, res) => {
    try {
        //get data
        const {name, email, password, role} = req.body;
        //check if user already exists
        const existingUser = await User.findOne({email});
        
        if(existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });  
        }

        //secure the password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(error) {
            return res.status(400).json({
                success: false,
                message: "Error in hasing password",
            })
        }

        //create entry for User
        const user = await User.create({
            name, email, password: hashedPassword, role
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "user cannot be registered, please try again later"
        });
    }
}


//login
exports.login = async function (req, res) {
    try{
        //fetch data
        const{ email, password } = req.body;
        //validation on email and password
        if(!email || !password) {
            return res.status(403).json({
                success: false,
                message: "Please fill all the details carefully",
            });
        }

        //check for registered user
        let user = await User.findOne({email});
        //if not a registered user
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered",
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        };

        //verify password and generate a jwt token
        if(await bcrypt.compare(password, user.password) ) {
            //password match
            let token = jwt.sign(payload, 
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: "2h",
                                });
            
            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token, 
                user,
                message: "User Logged in successfully"
            });

            // res.status(200).json({
            //     success: true,
            //     token, 
            //     user,
            //     message: "User Logged in successfully"
            // });
        }
        else {
            //password do not match
            return res.status(403).json({
                success: false,
                message: "Password Incorrect",
            });
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({ 
            success: false,
            message: "Login failure",
        });
    }
}

