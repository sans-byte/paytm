const app = require("express")();
const userRouter = require("./userRoutes");
const accountRouter = require("./accountRoutes");
const { authMiddleware } = require("./middleware/middleware");

app.use("/user", userRouter);
app.use("/account", authMiddleware, accountRouter);

module.exports = app;
