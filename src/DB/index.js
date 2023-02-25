const mongoose = require("mongoose");
const connect = async () => {
  const dbName = "Mantra_stg_database";
  const urlConnection = `mongodb://127.0.0.1:27017/${dbName}`;
  // const remoteURL = `mongodb+srv://dukandatabase:dukandatabase@dukandatabase.dpwex.mongodb.net/${dbName}?retryWrites=true&w=majority`;
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
