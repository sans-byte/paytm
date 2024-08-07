const express = require("express");
const User = require("../db/models/userModel");
const Account = require("../db/models/accountModel.js");
const router = express.Router();
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("./middleware/middleware");
const bcrypt = require("bcrypt");

const userSignUpSchema = zod.object({
  firstName: zod.string().min(1),
  lastName: zod.string().min(1),
  email: zod.string().email().min(6),
  password: zod
    .string()
    .min(6, "Please provide password more then 8 charachers"),
});

const userSignInSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

router.get("/", authMiddleware, async (req, res) => {
  const Users = await User.find();
  console.log(req._id);
  return res.status(200).json(Users);
});

router.post("/signin", async (req, res) => {
  const user = req.body;
  try {
    const parsedData = userSignInSchema.safeParse(user);
    if (!parsedData.success) {
      res.status(400).json(parsedData.error.issues);
    }
    const findUser = await User.findOne({ email: user.email });
    if (!findUser) {
      res.status(404).json("User does not exist");
    }
    const passwordMatch = await bcrypt.compare(
      user.password,
      findUser.password
    );
    if (!passwordMatch) {
      res.status(400).json("Password Incorrect");
    }
    const token = jwt.sign(findUser._doc, JWT_SECRET);
    return res.status(200).json({
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.post("/signup", async (req, res) => {
  const user = req.body;
  try {
    const parsedData = userSignUpSchema.safeParse(user);

    if (!parsedData.success) {
      return res.status(400).json(parsedData.error.issues);
    }

    if (await User.findOne({ email: user.email })) {
      return res.status(409).json("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    const createdUser = await User.create(user);
    const createdAccount = await Account.create({
      userId: createdUser._id,
      balance: 1 + Math.random() * 1000,
    });
    const token = jwt.sign(createdUser._doc, JWT_SECRET);
    res.status(201).json({
      token: token,
      UserId: createdUser._id,
      AccountId: createdAccount._id,
    });
  } catch (error) {
    console.log("Something went wrong while creating user", error);
    return res.status(500).json(error);
  }
});

router.put("/", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const values = req.body;
    const newValues = { ...user, ...values };
    const parsedData = userSignUpSchema.safeParse(newValues);

    if (!parsedData.success) {
      return res.status(400).json(parsedData.error.issues);
    }

    await User.findByIdAndUpdate(user._id, newValues);
    return res.status(200).json("Update Success");
  } catch (err) {
    return res.status(500).json("Error while updating information");
  }
});

router.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter;
    const users = await User.find({
      $or: [
        { firstName: { $regex: filter } },
        { lastName: { $regex: filter } },
      ],
    });
    return res.status(200).json({
      users: users.map((user) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        id: user._id,
      })),
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json("Error in finding users");
  }
});

module.exports = router;
