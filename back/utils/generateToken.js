const jwt = require("jsonwebtoken");

// const generateTokenAndSetCookie = (userId, res) => {
// 	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
// 		expiresIn: "15d",
// 	});

// 	res.cookie("jwt", token, {
// 		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
// 		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
// 		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
// 		secure: process.env.NODE_ENV !== "development",
// 	});
// };

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '15d' });
  
	// Set JWT token in the response cookies
	res.cookie("jwt", token, {
	  httpOnly: true, // Makes the cookie accessible only by the server
	  secure: process.env.NODE_ENV !== 'development', // Set to true if using HTTPS
	  sameSite: 'Strict', // Optional but recommended for CSRF protection
	});
  };
  

module.exports = generateTokenAndSetCookie;
