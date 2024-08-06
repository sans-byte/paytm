const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const actualToken = token.split(" ")[1];
    const decodeToken = jwt.verify(actualToken, JWT_SECRET);
    req.user = decodeToken;
  } catch (error) {
    res.status(403).json("UnAuthorized");
  }
  next();
};

module.exports = { authMiddleware };
