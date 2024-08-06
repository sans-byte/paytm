const express = require("express");
const User = require("../db/models/userModel");
const Account = require("../db/models/accountModel");
const router = express.Router();
const zod = require("zod");
const { default: mongoose } = require("mongoose");

const transferSchema = zod.object({
  to: zod.string(),
  amount: zod.number(),
});

router.get("/balance", async (req, res) => {
  try {
    const user = await req.user;
    const userAccount = await Account.findOne({ userId: user._id });
    if (!user || !userAccount) {
      return res.status(404).json("User or Account not found");
    }
    return res.status(200).json(userAccount.balance);
  } catch (error) {}
});

router.post("/transfer", async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { amount, to } = req.body;
    const parsedData = transferSchema.safeParse(req.body);
    if (!parsedData.success) {
      await session.abortTransaction();
      return res.status(400).send(parsedData.error.issues);
    }

    await new Promise((resolve) => setTimeout(resolve, 10000));

    const fromAccount = await Account.findOne({ userId: req.user._id }).session(
      session
    );

    if (!fromAccount) {
      await session.abortTransaction();
      return res.status(400).send("Sender account not found");
    }

    if (fromAccount.balance < amount) {
      await session.abortTransaction();
      return res.status(400).send("Insufficient balance");
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).send("Invalid account");
    }

    await Account.updateOne(
      { userId: to },
      {
        $inc: { balance: amount },
      }
    ).session(session);

    await Account.updateOne(
      { userId: req.user._id },
      {
        $inc: { balance: -amount },
      }
    ).session(session);
    await session.commitTransaction();
    return res.status(200).json("Transfer Success");
  } catch (err) {
    await session.abortTransaction();
    console.log(err);
    return res
      .status(500)
      .json("Something went wrong while processing the transaction");
  } finally {
    await session.endSession();
  }
});

module.exports = router;
