const basicpanchangModel = require("../Modules/basic_panchang.module");
const basicpanchangModel1 = require("../Modules/basic_panchang_1.module");

exports.createBasicPanchang = async (reqObj) => {
  try {
    const createdBasicPanhang = await basicpanchangModel.create(reqObj);
    return createdBasicPanhang;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

exports.createBasicePanchang1 = async (reqObj) => {
  try {
    const createdBasicPanhang = await basicpanchangModel1.create(reqObj);
    return createdBasicPanhang;
  } catch (err) {
    console.log("err", err);
    return err;
  }
}

exports.getBasicPanchangService = async (dateObj) => {
  try {
    const date = `${dateObj.day}_${dateObj.month}_${dateObj.year}`;
    const getData = await basicpanchangModel.find({date});
    return getData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

exports.getBasicPanchangService1 = async (dateObj) => {
  try {
    const date = `${dateObj.day}_${dateObj.month}_${dateObj.year}`;
    const getData = await basicpanchangModel1.find({date});
    return getData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

exports.getSunTimeService = async (dateObj) => {
  try {
    const date = `${dateObj.day}_${dateObj.month}_${dateObj.year}`;
    const getData = await basicpanchangModel1.find({date}).select(["sunrise", "sunset"]);
    return getData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
