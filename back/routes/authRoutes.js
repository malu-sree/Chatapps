// const express = require('express');
// const { signup,login } = require('../controllers/authController'); // Using CommonJS style import

// const router = express.Router();

// // Signup route
// router.post('/signup', signup);

// // Define the login route
// router.post('/login', login);


// module.exports = router; // Exporting router in CommonJS format


const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
