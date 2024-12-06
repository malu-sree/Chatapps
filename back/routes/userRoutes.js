

const express = require("express");
const router = express.Router();
const { getUsersForSidebar } = require("../controllers/userController");
const protectRoute = require("../middleware/protectRoute");

// Route to get users for the sidebar
router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;
