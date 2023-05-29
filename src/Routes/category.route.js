const express = require("express");
const { validationResult, checkSchema } = require("express-validator");
const {
  createCategoryController,
  getCategoryController,
  createSubCategoryController,
  editSubCategoryController,
  addSubCategoryDetails,
  editCategory,
  deleteCategory,
  deleteSubCategoryController,
  getSubCategoryByLangIdAndCategoryController,
} = require("../Controllers/category.controller");
const { createCategorySchema } = require("../Schema/category.schema");

const CategoryRouter = express.Router();

CategoryRouter.post(
  "/category",
  checkSchema(createCategorySchema),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    createCategoryController(req, res);
  }
);

CategoryRouter.get("/category/:lang_id", (req, res) => {
  getCategoryController(req, res);
});
CategoryRouter.get("/category/:lang_id/:categoryId/:subCategoryid", (req, res) => {
  getSubCategoryByLangIdAndCategoryController(req, res);
});

CategoryRouter.put('/category/:id', (req, res) => {
  editCategory(req, res);
});

CategoryRouter.delete('/category/:id', (req,res) => {
  deleteCategory(req, res);
});

CategoryRouter.post("/category/:categoryId/subCategory", (req, res) => {
  createSubCategoryController(req, res);
});

CategoryRouter.put("/category/:categoryId/subCategory", (req, res) => {
  editSubCategoryController(req, res);
});

CategoryRouter.delete('/category/:categoryId/subCategory/:id', (req,res) => {
  deleteSubCategoryController(req, res);
});

CategoryRouter.put("/category/:categoryId/subCategory/details", (req, res) => {
  addSubCategoryDetails(req, res);
});

module.exports = CategoryRouter;
