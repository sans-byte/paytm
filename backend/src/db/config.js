const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/paytm");
    console.log("Connected to DB");
  } catch (error) {
    console.log("Connection to dabase failed");
  }
};

module.exports = dbConnect;