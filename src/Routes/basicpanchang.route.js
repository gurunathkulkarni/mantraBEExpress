const express = require("express");
const { storePanchangByApi, getPanchang } = require("../Controllers/basicpanchang.controller");

const panchangRouter = express.Router();
panchangRouter.get("/basic_panchang/:fromDate/:toDate", (req, res) => {
  storePanchangByApi(req, res);
});

panchangRouter.post("/basic_panchang/details/:date", (req, res) => {
  console.log('coming')
  getPanchang(req, res);
});

module.exports = panchangRouter;
