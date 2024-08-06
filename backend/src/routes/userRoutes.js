const express = require("express");
const User = require("../db/models/userModel");
const router = express.Router();
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("./middleware/middleware");

const userSignUpSchema = zod.object({
  firstName: zod.string().min(1),
  lastName: zod.string().min(1),
  email: zod.string().email(),
  password: zod
    .string()
    .min(8, "Please provide password more then 8 charachers"),
});

const userSignInSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

router.get("/", authMiddleware, async (req, res) => {
  const Users = await User.find();
  console.log(req._id);
  res.json(Users);
});

router.post("/signin", async (req, res) => {
  const user = req.body;
  try {
    userSignInSchema.parse(user);
    const findUser = await User.findOne({ email: user.email });
    if (!findUser) {
      res.status(404).json("User does not exist");
    }
    const token = jwt.sign(findUser._doc, JWT_SECRET);
    res.status(200).json({
      token,
    });
  } catch (error) {
    console.log("Came here");
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/signup", async (req, res) => {
  const user = req.body;
  try {
    userSignUpSchema.parse(user);
    const token = jwt.sign(user, JWT_SECRET);
    if (User.findOne({ email: user.email })) {
      return res.status(411).json("User already exists");
    }
    const createdUser = await User.create(user);
    res.status(201).json({
      UserId: createdUser.id,
      Jwt: token,
    });
  } catch (error) {
    res.status(500).json(error);
    console.log("Something went wrong while creating user", error);
  }
});

router.put("/", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    const values = req.body;
    const newValues = { ...user, ...values };
    console.log(newValues);
    userSignInSchema.parse(newValues);
    await User.findByIdAndUpdate(user._id, newValues);
    res.status(200).json("Update Success");
  } catch (err) {
    res.status(411).json("Update Error");
  }
});

module.exports = router;
