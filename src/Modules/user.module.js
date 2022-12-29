const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, default: "unknown" },
    phoneNumber: { type: String, require: true, default: null },
    gender: { type: String, default: null },
    password: { type: String, default: null },
    userType: { type: String, default: "guest" },
    settings: {
      fontSize: { type: String, default: "11" },
      fontColor: { type: String, default: "black" },
      fontLineHeight: { type: String, default: "6" },
      disableVideo: { type: Boolean, default: true },
      autoplayVideo: { type: Boolean, default: false },
      displayLanguage: { type: String, default: "en" },
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;
