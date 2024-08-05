const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h2>Hello world</h2>");
});

app.listen(PORT, () => {
  try {
    console.log(`Listning on port ${PORT}`);
  } catch (error) {
    console.log("Error while starting server");
  }
});
