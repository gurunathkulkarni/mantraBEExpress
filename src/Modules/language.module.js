const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema(
  {
    langCode: { type: String, require: true, unique: true},
    displayLang: { type: String, require: true, unique: true},
    isActive: { type: Boolean, require: true},
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const LangaugeModel = new mongoose.model("Language", languageSchema);
module.exports = LangaugeModel;
