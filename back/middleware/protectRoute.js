const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

const protectRoute = async (req, res, next) => {
  try {
    // Retrieve the token from cookies
    const token = req.cookies.jwt;

    // If there's no token, send an unauthorized response
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No Token Provided" });
    }

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If token verification fails, send an unauthorized response
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    // Find the user associated with the decoded userId
    const user = await User.findById(decoded.userId).select("-password");

    // If no user found, send a not found response
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Attach the user to the request object to be used in the next middleware/controller
    req.user = user;

    // Proceed to the next middleware/controller
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = protectRoute;
