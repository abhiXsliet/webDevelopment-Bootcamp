//Import the required modules
const express = require('express');
const router = express.Router();

//Import the Controllers

//Course Controllers Import
const {
    createCourse,
    getAllCourses,
    getCourseDetails,
} = require('../controllers/Course');

//categories controller Import
const {
    showAllCategories,
    createCategory, 
    categoryPageDetails,
} = require('../controllers/Category');

//Sections controllers Import
const {
    createSection,
    updateSection, 
    deleteSection,
} = require('../controllers/Section');

//Sub-sections controllers Import
const {
    createSubSection,
    updateSubSection,
    deleteSubSection,
} = require('../controllers/Subsection');

//Rating Controllers Import
const {
    createRating,
    getAverageRating,
    getAllRatingAndReviews,
} = require('../controllers/RatingAndReview');

//Importing Middlewares
const {auth, isInstructor, isStudent, isAdmin} = require('../middleware/auth');

//*************************************************************************************
//                  Course Routes
//*************************************************************************************

//Courses can only be created by instructor
router.post('/createCourse', auth, isInstructor, createCourse);
//Add a Section to a Course
router.post('/addSection', auth, isInstructor, createSection);
//Update a Section
router.post('/updateSection', auth, isInstructor, updateSection);
//Delete a Section
router.post('/deleteSection', auth, isInstructor, deleteSection);
//Edit a Sub Section
router.post('/updateSubSection', auth, isInstructor, updateSubSection);
//Delete a Sub Section
router.post('/deleteSubSection', auth, isInstructor, deleteSubSection);
//Add a Sub Section to a Section
router.post('/addSubSection', auth, isInstructor, createSubSection);
//Get all Registered Courses
router.get('/getAllCourses', getAllCourses);
//Get Details for a Specific Courses
router.post('/getCourseDetails', getCourseDetails);

//***********************************************************************
//              Category Routes (Only By Admin)
//***********************************************************************
router.post('/createCategory', auth, isAdmin, createCategory);
router.get('/showAllCategories', showAllCategories);
router.post('/getCategoryPageDetails', categoryPageDetails);


//*****************************************************************************
//              Rating And Review
//*****************************************************************************
router.get('/createRating', auth, isStudent, createRating);
router.get('/getAverageRating', getAverageRating);
router.get('/getReviews', getAllRatingAndReviews);


module.exports = router;

