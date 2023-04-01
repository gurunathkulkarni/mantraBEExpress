const {
  createBasicPanchang,
  getBasicPanchangService,
} = require("../Services/panchang.service");
const { sendResponse, getDatesInArray } = require("../utils/helper");
const axios = require("axios");

exports.getPanchang = async (req, res) => {
  try {
    if (!req.params) {
      sendResponse(
        res,
        400,
        "please pass params from date and to Date foramt (YYYY-MM-DD)"
      );
    }
    const { date } = req.params;
    if (!date) {
      sendResponse(
        res,
        400,
        "please pass valid params date foramt (YYYY-MM-DD)"
      );
    }
    const splitDate = date.split("-");
    if (splitDate.length) {
      const result = await getBasicPanchangService({
        'day': splitDate[2],
        'month': splitDate[1],
        'year': splitDate[0],
      });
      sendResponse(res, 200, 'sucess', result, {});
    } else {
      sendResponse(
        res,
        400,
        "please pass valid params date foramt (YYYY-MM-DD)"
      );
    }
  } catch (err) {
    return sendResponse(res, 500, "error", {}, err);
  }
};

exports.storePanchangByApi = async (req, res) => {
  try {
    if (!req.params) {
      sendResponse(
        res,
        400,
        "please pass params from date and to Date foramt (YYYY-MM-DD)"
      );
    }
    const { fromDate, toDate } = req.params;
    if (!fromDate && !toDate) {
      sendResponse(
        res,
        400,
        "please pass valid params from date and to Date foramt (YYYY-MM-DD)"
      );
    }
    const dates = getDatesInArray(fromDate, toDate);
    if (Array.isArray(dates) && dates.length) {
      const resultArray = [];
      dates.forEach(async (item) => {
        const spiltDate = item.split("-");
        var raw = JSON.stringify({
          day: spiltDate[2],
          month: spiltDate[1],
          year: spiltDate[0],
          hour: 12,
          min: 00,
          lat: 28.6139,
          lon: 77.1025,
          tzone: 5.5,
        });
        const header = {
          "Content-Type": "application/json",
          Authorization:
            "Basic NjIxOjA2YzY1Y2Q1ZDJlNmY3MTJmNzhlYWRlYzA3ZDRhNjFh.",
        };

        console.log("raw", raw);
        const response = await axios.post(
          "https://json.apireports.com/v1/basic_panchang",
          raw,
          { headers: header }
        );
        // console.log("response", response);
        if (
          response &&
          response.status === 200 &&
          response.data &&
          response.data.status_code &&
          response.data.status_code === 200 &&
          response.data?.status === true &&
          response.data?.data &&
          Object.keys(response.data?.data).length
        ) {
          const jsonParse = JSON.parse(raw);
          const moduleObj = response.data?.data;
          moduleObj.dayInString = moduleObj.day;
          moduleObj.day = jsonParse.day;
          moduleObj.month = jsonParse.month;
          moduleObj.year = jsonParse.year;
          moduleObj.hour = jsonParse.hour;
          moduleObj.min = jsonParse.min;
          const data = await createBasicPanchang(moduleObj);
          resultArray.push({ data });
        }
      });
      sendResponse(res, 200, "sucess", resultArray, {});
    } else {
      sendResponse(res, 400, "Date Issue");
    }
    // console.log("myHeaders");
  } catch (err) {
    return sendResponse(res, 500, "error", {}, err);
  }
};
