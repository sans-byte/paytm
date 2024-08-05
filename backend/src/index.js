const express = require("express");
const app = express();
const dbConnect = require("./db/config");
const routes = require("./routes/index");
const PORT = 3000;
app.use(express.json());

app.use("/api/v1", routes);

app.listen(PORT, () => {
  try {
    dbConnect();
    console.log(`Listning on port ${PORT}`);
  } catch (error) {
    console.log("Error while starting server", error);
  }
});
