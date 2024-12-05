const mongoose = require('mongoose'); // Using CommonJS style import

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    profilePic: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User; // Exporting User model in CommonJS format
