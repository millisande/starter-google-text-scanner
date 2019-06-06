//if you have any passwords you don't want people who have the code can see you can download the 'dotenv' package
//a package in node is something someone else has written that you can reuse like a library in Python
//this line runs the .config() function which get the config from a file with filename .env
require('dotenv').config();
//as it happens we are using the google's way of authenticating so we don't need this
//however I'm leaving it here in case we need it later

//this gets a package which allows the running of a server
const express = require("express")
let session = require('express-session');

// Imports the Google Cloud client library which lets us do Google AI API calls more easily
const vision = require('@google-cloud/vision');
//and this sets up that we want to use the image detection APIs
const client = new vision.ImageAnnotatorClient();

//This is to allow the messages we get back from an API call to be read more easily by a human
let bodyParser=require("body-parser");

//This sets up your server so you can refer to it later in the code
const  app = express();
//const  appEnv = cfenv.getAppEnv();


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

//we are going to hard code the image that we're going to detect text on
const fileName = 'image.jpg';

// This says what the code should do if anyone (or your app) tries to go to your-web-address/detect
router.get('/detect', async function(req, res) {
  //because there's a chance that google won't work we say to only try it
  //if we didn't do that and the request for info from google failed then the whole app would stop working
  try {
  // we say to await a response from the google service with the info about the picture
  // this is because this request for info is "asynchronous"
  //normally code goes through each line in turn but for asynchronous calls the code moves onto the next line before the request from google is received
  const [result] = await client.documentTextDetection(fileName);
  //we get a whole lot of information from google and we only need the full text annotation
  const fullTextAnnotation = result.fullTextAnnotation;
  //print it in the console just to check it
  console.log(`Full text: ${fullTextAnnotation.text}`);
  //this sends it to the front end
  res.json(fullTextAnnotation.text)
  }
  //if google doesn't send a good response back we have an error and we send an error to the front end instead
  catch (error) {
    console.log(error.message)
    res.status(500).send()
  }
})


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
