const express = require("express");
const app = express();
const dbConnect = require("./db/config");
const cors = require("cors");
const routes = require("./routes/index");
const PORT = 3000;
app.use(express.json()); //for now let's stick to this if required we will use body-parser
app.use(cors());

app.use("/api/v1", routes);

app.listen(PORT, () => {
  try {
    dbConnect();
    console.log(`Listning on port ${PORT}`);
  } catch (error) {
    console.log("Error while starting server", error);
  }
});
