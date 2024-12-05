// const express = require('express');
// const { signup,login } = require('../controllers/authController'); // Using CommonJS style import

// const router = express.Router();

// // Signup route
// router.post('/signup', signup);

// // Define the login route
// router.post('/login', login);


// module.exports = router; // Exporting router in CommonJS format


const express = require('express');
const { signup, signin } = require('../controllers/authController'); // Import the controller functions

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Signin route
router.post('/signin', signin);

module.exports = router; // Export the router

