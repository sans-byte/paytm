const { default: mongoose } = require("mongoose");

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowerCase: true,
    trim: true,
    min: 6,
  },
});

module.exports = mongoose.model("User", userModel);
