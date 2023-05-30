const mongoose = require("mongoose");

const basicpanchangSchema1 = new mongoose.Schema(
  {
    day: {type: String},
    tithi: {type: String},
    yog: {type: String},
    nakshatra: {type: String},
    karan: {type: String},
    sunrise: {type: String},
    sunset: {type: String},
    date: {type: String},
    dayInString: {type: String},
    month: {type: String},
    year: {type: String},
    hour: {type: String},
    min: {type: String},
    
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const basicpanchangModel1 = new mongoose.model(
    "basicpanchang1",
    basicpanchangSchema1
  );
  module.exports = basicpanchangModel1;
