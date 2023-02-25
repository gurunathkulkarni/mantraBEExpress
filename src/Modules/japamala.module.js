const mongoose = require("mongoose");

const japamalaSchema = new mongoose.Schema(
    {
      langCode: { type: String, require: true, unique: true},
      displayLang: { type: String, require: true, unique: true},
      isActive: { type: Boolean, require: true},
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );
  
  const japamalaModel = new mongoose.model("japamala", japamalaSchema);
  module.exports = japamalaModel;