const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema(
  {
    langaugeCode: { type: String, require: true, default: "HI" },
    displayLangauge: { type: String, require: true, default: "Hindi" },
    isActive: { type: Boolean, require: true, default: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const LangaugeModel = new mongoose.model("Language", languageSchema);
module.exports = LangaugeModel;
