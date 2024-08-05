const express = require("express");
const User = require("../db/models/userModel");
const router = express.Router();

router.get("/", async (req, res) => {
  const Users = await User.find();
  console.log(Users);
  res.json(Users);
});

router.post("/login", (req, res) => {
  res.json("We are in router");
});

router.post("/register", (req, res) => {
  res.json("We are in router");
});

module.exports = router;
