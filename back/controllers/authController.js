// const bcrypt = require('bcryptjs'); // Using CommonJS style import
// const User = require('../models/userModel'); // Using CommonJS style import

// // Signup function
// const signup = async (req, res) => {
//   try {
//     // Destructure the necessary fields from the request body
//     const { fullName, username, password, confirmPassword, gender } = req.body;

//     // Check if passwords match
//     if (password !== confirmPassword) {
//       return res.status(400).json({ error: "Passwords don't match" });
//     }

//     // Check if the username already exists
//     const userExists = await User.findOne({ username });
//     if (userExists) {
//       return res.status(400).json({ error: "Username already exists" });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Generate profile picture URL
//     const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
//     const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

//     // Create new user object
//     const newUser = new User({
//       fullName,
//       username,
//       password: hashedPassword,
//       gender,
//       profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
//     });

//     // Save the user to the database
//     await newUser.save();

//     // Send response with user data
//     res.status(201).json({
//       message: "User registered successfully",
//       user: {
//         _id: newUser._id,
//         fullName: newUser.fullName,
//         username: newUser.username,
//         gender: newUser.gender,
//         profilePic: newUser.profilePic,
//       },
//     });
//   } catch (error) {
//     console.error("Error during signup:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// module.exports = { signup }; // Exporting signup function in CommonJS format


const bcrypt = require('bcryptjs'); // Using CommonJS style import
const User = require('../models/userModel'); // Using CommonJS style import
const generateTokenAndSetCookie = require('../utils/generateToken'); // Import the token generation function

// Signup function
const signup = async (req, res) => {
  try {
    // Destructure the necessary fields from the request body
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // Check if the username already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate profile picture URL
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create new user object
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT and set cookie
    generateTokenAndSetCookie(newUser._id, res);

    // Send response with user data (excluding password)
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    // Destructure the necessary fields from the request body
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

    // If the user doesn't exist or the password is incorrect
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // Generate JWT and set cookie
    generateTokenAndSetCookie(user._id, res);

    // Send response with user data (excluding password)
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { signup, login }; // Exporting signup function in CommonJS format
