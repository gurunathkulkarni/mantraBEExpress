const mongoose = require("mongoose");

const basicpanchangSchema = new mongoose.Schema(
    {
        day: { type: String},
        month: { type: String},
        year: {type: String},
        hour:{type: String},
        min: {type: String},
        dayInString: { type: String},
        tithi: { type: String},
        yog: { type: String},
        nakshatra: {type: String},
        karan: {type: String},
        sunrise: {type: String},
        sunset: {type: String}
    },
    {
      timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
  );
  
  const basicpanchangModel = new mongoose.model("basicpanchang", basicpanchangSchema);
  module.exports = basicpanchangModel;