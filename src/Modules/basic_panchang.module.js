const mongoose = require("mongoose");

const basicpanchangSchema = new mongoose.Schema(
  {
    date: {type: String},
    day: { type: String },
    month: { type: String },
    year: { type: String },
    hour: { type: String },
    min: { type: String },
    dayInString: { type: String },
    tithi: { type: String },
    yog: { type: String },
    nakshatra: { type: String },
    karan: { type: String },
    sunrise: { type: String },
    sunset: { type: String },
    ascendant: { type: String },
    ascendant_lord: { type: String },
    varna: { type: String },
    vashya: { type: String },
    yoni: { type: String },
    gan: { type: String },
    nadi: { type: String },
    sign: { type: String },
    sign_lord: { type: String },
    nakshatra_lord: { type: String },
    charan: { type: String },
    yunja: { type: String },
    tatva: { type: String },
    name_alphabet: { type: String },
    paya: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const basicpanchangModel = new mongoose.model(
  "basicpanchang",
  basicpanchangSchema
);
module.exports = basicpanchangModel;
