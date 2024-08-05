const app = require("express")();
const userRouter = require("./userRoutes");
app.use("/users", userRouter);

module.exports = app;
