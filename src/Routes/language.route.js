const express = require("express");
const { getLanguageController, createLanguageController, getLanguageById } = require("../Controllers/Langauge.controller");

const LanguageRouter = express.Router();
LanguageRouter.get("/language", (req, res) => {
    getLanguageController(req, res);
});

LanguageRouter.post("/language", (req, res) => {
  createLanguageController(req, res);
});

LanguageRouter.get("/language/:id", (req, res) => {
    getLanguageById(req, res);
});
LanguageRouter.put("/language/:id", (req, res) => {
  
});

module.exports = LanguageRouter;
