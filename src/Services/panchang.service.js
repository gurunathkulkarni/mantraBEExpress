const basicpanchangModel = require("../Modules/basic_panchang.module");

exports.createBasicPanchang = async (reqObj) => {
  try {
    const createdBasicPanhang = await basicpanchangModel.create(reqObj);
    return createdBasicPanhang;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

exports.getBasicPanchangService = async (dateObj) => {
  try {
    console.log("date", dateObj);
    const filter = {
      'day': '03', 
      'month': '11', 
      'year': '2023'
    };
    const date = `${dateObj.day}_${dateObj.month}_${dateObj.year}`;
    console.log("coming", date);
    const getData = await basicpanchangModel.find({date});
    console.log("getData", getData);
    return getData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
