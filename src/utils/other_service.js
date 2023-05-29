//global variables
const userID = "633";
const apiKey = "fe6f5a3672271867ac4e12dd96e9ee28";
const resource = "astro_details";


// import
const { ApiReportsClient } = require("./../../sdk/ApiReportsClient");
//

exports.getPanchangFromService = (reqObj) => {
  /* instantiate ApiReportsClient class */
  var client = new ApiReportsClient(userID, apiKey);

  /* Set api response language */
  client.setLanguage("en");

  /* call JSON apis */
  client.callJsonApi(resource, data, function (response) {
    console.log(response); //JSON RAW RESPONSE
    var resp = JSON.parse(response);
    console.log(resp); //JSON RESPONSE

    console.log("ASCENDANT : " + resp.data.ascendant); //SINGLE KEY RESPONSE
  });
};
