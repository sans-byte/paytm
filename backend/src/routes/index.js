const app = require("express")();
const userRouter = require("./userRoutes");
const { authMiddleware } = require("./middleware/middleware");
app.use("/users", userRouter);

module.exports = app;
