const express = require('express');
const router = express.Router();

const User = require('../models/User');

const {login, signup} = require("../controllers/Auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");

// router.post("/login", login);
router.post("/signup", signup);
router.post("/login", login);

//testing Route
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message:"Welcome to the Route for TEST",
    })
})

//Protected Route for student
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected Route for students",
    });
});

//Protected Route for admin
router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected Route for Admin",
    });
});

// //to get the user data from id
// router.get("/getEmail", auth, async (req, res) => {
//     try{
//         const id = req.user.id;
//         console.log("ID : ", id);
//         const user = await User.findById(id);

//         res.status(200).json({
//             success: true,
//             user: user,
//             message: "Welcome to the email Route"
//         });
//     } catch(error) {
//         res.status(500).json({
//             success: false,
//             error: error.message,
//             message: "Fatt gya code",
//         });
//     }
// })

module.exports = router;