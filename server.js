//if you have any passwords you don't want people who have the code can see you can download the 'dotenv' package
//a package in node is something someone else has written that you can reuse like a library in Python
//this line runs the .config() function which get the config from a file with filename .env
require('dotenv').config();

//this gets a package which allows the running of a server
const express = require("express")
let session = require('express-session');

//I have commented this out as for the time being we will use Google API services and not IBM's
//const watson = require("watson-developer-cloud");

//This is to allow the messages we get back from an API call to be read more easily by a human
let bodyParser=require("body-parser");

//if you are hosting this on the cloud a file called .env with your passwords in won't work
//this piece of code will check if you are running your app on your computer or from a computer in the cloud
if (process.env.VCAP_APPLICATION) {
  VCAP_APPLICATION = JSON.parse(process.env.VCAP_APPLICATION)
}

if (process.env.VCAP_SERVICES) {
  VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES)
}
else {
  VCAP_SERVICES = false
}


//this will need to change depending on...
var wa_api_key

if (VCAP_SERVICES){
  wa_api_key = VCAP_SERVICES.conversation[0].credentials.apikey
}
else {
  wa_api_key = process.env.ASSISTANT_API_KEY
}


//this will need to change to be google
var assistant = new watson.AssistantV1({
  iam_apikey: wa_api_key,
  url: "https://gateway-lon.watsonplatform.net/assistant/api",
  version: "2018-09-20"
});

//this says that we can use some additional pages to display info that our app can then get
//e.g. you want to do an API call to google to ask google what text is in an image?
//well you front end html/css/js (front end) can't do that, it's just not designed to do that, it can do much smaller API requests though
//it can go and get data from a webpage
//so what we'll do is set up a webpage in this code which will display the text in a very ugly way if the front end requests it
//this line of code says to expect that.
var router = express.Router();

//this says to use the package which makes reading API responses easier
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//this is where we say which webpage the front end will try to get data from and what to do if the front end requests it.
//this is where you need to tell the server to do an API call
router.post('/conversation', (req, res) => {
   const input = req.body;
   console.log("attempting call to watson assistant")
   //console.log(input)
   assistant.message({workspace_id: process.env.ASSISTANT_WORKSPACE, input: {'text': input.question}, context: input.context}, (err, result) => {
     if (!err && result.output.text) {
       console.log(result.context);
       res.status(200).send({"output": result.output.text, "context": result.context})
     } else {
       res.status(500).send(err)
     }
   })
 });



// //This just to add all the web pages that your front end may request to your app
app.use('/', router);

//This is to tell your app to show all the html in the public folder
app.use(express.static(__dirname + '/public'));


//This says that if you are running this on your computer to display your content at webaddress localhost:1100
//It also says that if you're not running on your computer because you are running it in the cloud then you should use the web address defined in a file called a manifest.yml file
const PORT = process.env.PORT || 1100

//then it says to listen to requests at that webaddress so it will show you your webpages at that address
app.listen(PORT, function () {
  console.log(`running on port ${PORT}`)
});
