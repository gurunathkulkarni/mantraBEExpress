const {ApiReportsClient} = require('./sdk/ApiReportsClient')

/* Api UserID and ApiKey */
var userID = '633'
var apiKey = 'fe6f5a3672271867ac4e12dd96e9ee28'

/* make some dummy data in order to call Astrology Api Reports API */
var data = {
  'day'  : 15,
  'month': 9,
  'year' : 1994,
  'hour' : 12,
  'min'  : 30,
  'lat'  : 28.6139,
  'lon'  : 77.1025,
  'tzone': 5.5
}

/* api name which is to be called */
resource = 'astro_details'

/* instantiate ApiReportsClient class */
var client = new ApiReportsClient(userID,apiKey)

/* Set api response language */
client.setLanguage('en')

/* call JSON apis */
client.callJsonApi(resource,data,function(response){
  console.log(response) //JSON RAW RESPONSE
  var resp = JSON.parse(response)
  console.log(resp) //JSON RESPONSE

  console.log("ASCENDANT : " + resp.data.ascendant) //SINGLE KEY RESPONSE
})