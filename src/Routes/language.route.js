const express = require("express");
const { validationResult, checkSchema } = require("express-validator");
const {
  getLanguageController,
  createLanguageController,
  getLanguageById,
  updateLanguageController,
} = require("../Controllers/Langauge.controller");
const {
  postLanguageSchema,
  getByIdLangauge,
  putLanguageSchema,
} = require("../Schema/Language.schema");

const LanguageRouter = express.Router();
LanguageRouter.get("/language", (req, res) => {
  getLanguageController(req, res);
});

LanguageRouter.post(
  "/language",
  checkSchema(postLanguageSchema),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    createLanguageController(req, res);
  }
);

LanguageRouter.get(
  "/language/:id",
  checkSchema(getByIdLangauge),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    getLanguageById(req, res);
  }
);

LanguageRouter.put(
  "/language/:id",
  checkSchema(putLanguageSchema),
  (req, res) => {
    updateLanguageController(req, res);
  }
);

module.exports = LanguageRouter;
