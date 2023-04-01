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
    const getData = await basicpanchangModel.findOne({day:dateObj.day,month:dateObj.month,year: dateObj.year});
    console.log("getData", getData);
    return getData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};
