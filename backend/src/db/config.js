const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.connect(
      "mongodb+srv://sanskarweb15:03ImMUBhlSKogDNV@cluster0.fpibd5p.mongodb.net/paytm"
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log("Connection to dabase failed");
  }
};

module.exports = dbConnect;
