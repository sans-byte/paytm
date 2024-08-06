const express = require("express");
const User = require("../db/models/userModel");
const router = express.Router();
const jwt = require("jsonwebtoken");
const zod = require("zod");

module.exports = router;
