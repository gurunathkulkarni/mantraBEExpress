const mongoose = require("mongoose");

const japamalaSchema = new mongoose.Schema(
    {
      user_id: { type: String, require: true, unique: true},
      name: { type: String, require: true, unique: true},
      isActive: { type: Boolean, require: true},
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );
  
  const japamalaModel = new mongoose.model("japamala", japamalaSchema);
  module.exports = japamalaModel;