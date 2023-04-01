const moment = require("moment");
require('twix')
// const twix = require('twix');

exports.sendResponse = (res, statusCode, message, data, error) => {
  return res.status(statusCode).send({ message, data, error });
};

exports.getDatesInArray = (fromDate, toDate) => {
    try {
        var itr = moment
          .twix(new Date(fromDate), new Date(toDate))
          .iterate("days");
      
        var range = [];
        while (itr.hasNext()) {
          range.push(itr.next().format("YYYY-M-D"));
        }
        // console.log(range);
        return range;
    } catch(err) {
        console.log('err', err);
        return false;
    }

};
