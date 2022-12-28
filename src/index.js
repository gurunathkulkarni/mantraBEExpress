const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./Routes/user.route");
const connect = require("./DB/index");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
connect();
app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
