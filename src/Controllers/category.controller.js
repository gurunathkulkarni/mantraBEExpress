const { createCategoryService, getCategoryService, createSubCategoryService, editSubCategory, addDetailsToSubCategory, updateCategory, deleteCategoryService, deleteSubCategoryService } = require("../Services/category.service");
const { sendResponse } = require("../utils/helper");

exports.createCategoryController = async (req, res) => {
  const { categoryName, categoryTitle, lang_id, day, imageUrl } = req.body;
  const createdCategory = await createCategoryService({
    categoryName,
    categoryTitle,
    lang_id,
    day,
    imageUrl,
  });
  sendResponse(res, 200, "created successfully", createdCategory);
};

exports.getCategoryController = async (req, res) => {
  try {
    const { lang_id } = req.params;
    const getCategory = await getCategoryService(lang_id);
    sendResponse(res, 200, "", getCategory);
  } catch(err) {
    sendResponse(res, 500, "", {},err);
  }
}

exports.editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCategory = await updateCategory(id, req.body);
    sendResponse(res, 200, updatedCategory.message, updatedCategory);
  } catch(err) {
    sendResponse(res, 500, "", {},err);
  }
}

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await deleteCategoryService(id)
    sendResponse(res, 200, deletedCategory.message);
  } catch(err) {
    sendResponse(res, 500, "", {},err);
  }
}

exports.createSubCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const createdSubCategory = await createSubCategoryService({categoryId, reqObj: req.body});
    sendResponse(res, 200, "created successfully", createdSubCategory);
  } catch (err) {
    sendResponse(res, 500, "", {}, err);
  }
}

exports.editSubCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const updatedSubCategory = await editSubCategory(categoryId, req.body);
    sendResponse(res, 200, "updated successfully", updatedSubCategory);
  } catch (err) {
    sendResponse(res, 500, "", {}, err);
  }
}


exports.deleteSubCategoryController = async (req, res) => {
  try {
    const { categoryId, id } = req.params;
    const deletedSubCategory = await deleteSubCategoryService(categoryId, id);
    res.send(deletedSubCategory);
  } catch (err) {
    sendResponse(res, 500, "", {}, err);
  }
}

exports.addSubCategoryDetails = async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log('req', req.body)
    const updatedSubCategoryDetails = await addDetailsToSubCategory(categoryId, req.body);
    sendResponse(res, 200, "updated successfully", updatedSubCategoryDetails);
  } catch (err) {
    sendResponse(res, 500, "", {}, err);
  }
}
