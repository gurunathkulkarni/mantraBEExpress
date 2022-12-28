const mongoose = require("mongoose");
const connect = async () => {
  const dbName = "example";
  const urlConnection = `mongodb://127.0.0.1:27017/${dbName}`;
  mongoose
    .connect(urlConnection)
    .then(() => {
      console.log("Connected to Database...!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
