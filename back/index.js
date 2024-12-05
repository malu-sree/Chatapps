// //const path = require("path");
// const express = require("express");
// const dotenv = require("dotenv");
// //const cookieParser = require("cookie-parser");

//  const authRoutes = require("./routes/authRoutes");
// // const messageRoutes = require("./routes/message.routes");
// // const userRoutes = require("./routes/user.routes");

// const connectToMongoDB = require("./db/connectToMongoDB");
// // const { app, server } = require("./socket/socket");

// dotenv.config();

// // Resolve __dirname manually since it's not defined in CommonJS when using modules
// // const __dirname = path.resolve();

// // PORT should be assigned after calling dotenv.config()
// const PORT = process.env.PORT || 5002;
// const app=express()
// app.use(express.json()); // To parse the incoming requests with JSON payloads (from req.body)
// //app.use(cookieParser());

// // API Routes
//  app.use("/api/auth", authRoutes);
// // app.use("/api/messages", messageRoutes);
// // app.use("/api/users", userRoutes);

// // Serve frontend
// //app.use(express.static(path.join(__dirname, "/frontend/dist")));

// // app.get("*", (req, res) => {
// //   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// // });

// // Start the server
// app.listen(PORT, () => {
//   connectToMongoDB();
//   console.log(`Server Running on port ${PORT}`);
// });


const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); // Make sure you have body-parser installed
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes'); // Using CommonJS style import
const connectToMongoDB = require("./db/connectToMongoDB");

dotenv.config(); // Load environment variables

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(bodyParser.json()); // Ensure body parser is used if needed
app.use(cookieParser()); // Parse cookies if necessary

// Routes
app.use('/api/auth', authRoutes);

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});