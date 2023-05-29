var request = require('request');
class ApiReportsClient {

  constructor( id,key ) {
    this.userId = id
    this.apiKey = key
    this.apiLanguage = "en"
    this.jsonApiUrl = 'https://json.apireports.com/v1/'
    this.pdfApiUrl = 'https://pdf.apireports.com/v1/'
  }

  setLanguage(lang){
  	this.apiLanguage = lang
  }

  callJsonApi(apiEndPoint,data,onCallBack) {
    var url = this.jsonApiUrl+apiEndPoint;
    var options = {
      'method': 'POST',
      'url': url,
      'auth': { 'user': this.userId, 'password': this.apiKey },
      'headers': {
        'Accept-Language': this.apiLanguage,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      onCallBack(response.body)
    });
  }

  callPdfApi(apiEndPoint,data,onCallBack) {
    var url = this.pdfApiUrl+apiEndPoint;
    var options = {
      'method': 'POST',
      'url': url,
      'auth': { 'user': this.userId, 'password': this.apiKey },
      'headers': {
        'Accept-Language': this.apiLanguage,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      onCallBack(response.body)
    });
  }
}

exports.ApiReportsClient = ApiReportsClient