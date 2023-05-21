const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, require: true },
    categoryTitle: { type: String, require: true },
    lang_id: { type: mongoose.Schema.Types.ObjectId, ref: "Language", require: true },
    isActive: { type: Boolean, require: true, default: true },
    imageUrl: { type: Buffer, require: false },
    day: { type: String, require: false },
    sub_category: [
      {
        sub_category_name: { type: String, require: true },
        sub_category_title: { type: String, require: true  },
        id: { type: String, require: true },
        isActive: { type: String, require: true },
        details: { type: String, require: true  }
      }
    ]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const categoryModel = new mongoose.model("category", categorySchema);
module.exports = categoryModel;


// new mongoose.Schema({
//   sub_category_name: { type: String, require: true },
//   sub_category_is_active: { type: String, require: true, default: true },
//   sub_category_title: { type: String, require: true },
// })