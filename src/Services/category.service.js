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

exports.updateCategory = async (id, reqObj) => {
  try {
    const { categoryName, categoryTitle, day, imageUrl } = reqObj;
    const existingCategory = await categoryModel.findById(id);
    if (!existingCategory) return { message: 'category not found', status: false }
    if (categoryName) existingCategory.categoryName = categoryName;
    if (categoryTitle) existingCategory.categoryTitle = categoryTitle;
    if (day) existingCategory.day = day;
    if (imageUrl) existingCategory.imageUrl = imageUrl;
    await existingCategory.save();
    return { message: 'updated successfully', data: existingCategory };
  } catch (err) {
    return err;
  }
}

exports.deleteCategoryService = async (id) => {
  try {
    await categoryModel.deleteOne({ _id: id });
    return { message: 'success', status: true };
  } catch(err) {
    return { message: 'success failed', status: false };
  }
}

exports.getCategoryService = async (lang_id) => {
  try {
    console.log("lang_id", lang_id);
    const getCategory = await categoryModel.find({ lang_id: lang_id });
    return getCategory;
  } catch (err) {
    return err;
  }
};


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

exports.deleteSubCategoryService = async (categoryId, id) => {
  try {
    await categoryModel.update({_id: categoryId}, {
      $pull: {
        sub_category: {
          _id: id
        }
      }
    });
    return { message: 'deleted successfully', status: true };
  } catch(err) {
    return { message: 'deleted failed', status: false };
  }
}

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
    console.log('details', reqObj);
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
