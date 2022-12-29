const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const userRouter = require("./Routes/user.route");
const connect = require("./DB/index");
const LanguageRouter = require("./Routes/language.route");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
connect();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(userRouter);
app.use(LanguageRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
