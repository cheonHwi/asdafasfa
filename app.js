const cors = require("cors");
const experss = require("express");

const app = experss();

app.use(cors());

app.get("/", (req, res) => {
  console.log("suc");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server open at 3000");
});
