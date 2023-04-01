const express = require("express");
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const port = 4000;
const userRouter = require("./Routes/user.route");
const connect = require("./DB/index");
const LanguageRouter = require("./Routes/language.route");
const CategoryRouter = require("./Routes/category.route");
const panchangRouter = require("./Routes/basicpanchang.route");


app.get("/", (req, res) => {
  res.send("Hello World!");
});
connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '5mb'}));
app.use(cors({
  origin: '*'
}));
app.use(userRouter);
app.use(LanguageRouter);
app.use(CategoryRouter);
app.use(panchangRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
