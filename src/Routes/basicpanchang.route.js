const express = require("express");
const {
  storePanchangByApi,
  getPanchang,
  storePanchangByApi1,
  getPanchangBasic,
  getSunTime,
} = require("../Controllers/basicpanchang.controller");

const panchangRouter = express.Router();
panchangRouter.get("/basic_panchang/:fromDate/:toDate", (req, res) => {
  storePanchangByApi(req, res);
});
panchangRouter.get("/basic_panchang1/:fromDate/:toDate", (req, res) => {
  storePanchangByApi1(req, res);
});

panchangRouter.get("/basic_panchang/details/advance/:date", (req, res) => {
  getPanchang(req, res);
});

panchangRouter.get("/basic_panchang/details/basic/:date", (req, res) => {
  getPanchangBasic(req,res);
});

panchangRouter.get("/mantraapi/sun_time/:date", (req, res) => {
  getSunTime(req, res);
})

module.exports = panchangRouter;
