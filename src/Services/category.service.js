const categoryModel = require("../Modules/Category.module");
const crypto = require("crypto");

exports.createCategoryService = async (reqObj) => {
  try {
    const createdCategory = await categoryModel.create(reqObj);
    return createdCategory;
  } catch (err) {
    return err;
  }
};

exports.getCategoryService = async (lang_id) => {
  try {
    console.log("lang_id", lang_id);
    const getCategory = await categoryModel.find({ lang_id: lang_id });
    return getCategory;
  } catch (err) {
    return err;
  }
};

exports.editCategory = async () => {};

exports.createSubCategoryService = async (req) => {
  try {
    const id = crypto.randomBytes(16).toString("hex");
    const { categoryId, reqObj } = req;
    const existingCategory = await categoryModel.findOne({ _id: categoryId });
    if (!existingCategory) {
      return { message: "category not exisit" };
    }
    if (existingCategory.id === id) {
      return { message: "please try after some time" };
    }
    reqObj.id = id;
    reqObj.isActive = true;
    existingCategory.sub_category.push(reqObj);
    existingCategory.save();
    return existingCategory;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

exports.editSubCategory = async (categoryId, reqObj) => {
  try {
    const { id } = reqObj;
    const existingCategory = await categoryModel.findOne({ _id: categoryId });
    if (!existingCategory) {
      return { message: "category not exisit" };
    }
    existingCategory.sub_category.length &&
      existingCategory.sub_category.map((item) => {
        if (id === item.id) {
          if (reqObj.sub_category_name)
            item.sub_category_name = reqObj.sub_category_name;
          if (reqObj.sub_category_title)
            item.sub_category_title = reqObj.sub_category_title;
          if (reqObj.isActive) item.isActive = reqObj.isActive;
        }
      });
    existingCategory.save();
    return existingCategory;
  } catch (err) {
    return err;
  }
};

exports.addDetailsToSubCategory = async (categoryId, reqObj) => {
  try {
    const { id, details } = reqObj;
    const existingCategory = await categoryModel.findOne({ _id: categoryId });
    if (!existingCategory) {
      return { message: "category not exisit" };
    }
    if (!details) {
      return { message: "Please pass the string" };
    }
    await categoryModel.updateOne(
      { "sub_category._id": id },
      { $set: { "sub_category.$.details": details } }
    );
    const response = await categoryModel.findOne({ _id: categoryId });
    return response;
  } catch (err) {
    console.log("error", err);
    return err;
  }
};
