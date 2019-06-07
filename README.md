# starter-google-text-scanner
A very simple web application which displays the text from an image

## What is this application?

When the application is loaded in a webpage it will get the image in the image.jpg folder and it will send this to Google's Cloud Vision API, specifically the documentTextDetection API. This will return all the text found in the image. The application will then display this text on the webpage.

Here is an architectural overview diagram so you can see the different components of the working application.

![Architectural Overview Diagram](/readme-images/AOD.png "Architectural Overview Diagram")

So if you have a look at the files in the folder:

![Folder structure](/readme-images/files.png "Folder Structure")

We have a files called `server.js`. This is what runs our application and makes it accessible from a web address. You can see this on the architectural overview diagram as the "Express server"

We have a folder called `public`. This is where we have all of the elements we want to show on at that web address. You can see this on the architectural overview diagram.

We have a file called `image.jpg` which we will be sending to the Google API.

We have a file called `service-key.json`. This contains the "password" or service credentials to be able to talk to Google and this Read me document will explain how to set this up.

All the rest of the files are system files which are used to do set up or to provide these instructions so they can be ignored.

## How to set up the application so it will work on my computer

- 1 Download this repository of code (repo)
- 2 Install npm and Node
- 3 Set up Google Services
- 4 Install the dependencies of this repo

### 1. Download this repository of code

Have you ever used Github before?

Github is like the dropbox or google drive of code. It allows seamless co-working on a code based project and stores all of your code in their online database. You use "git" commands on your computer or the github desktop app to work with the code and share it with the rest of your team.

In order to work on this repo there are therefore benefits for using Git but as you won't be working on it with me you can instead just Download the full repo to your computer.

#### Option A - Download the full repo

If you are not planning on using Github again or not planning in incorporating changes the author makes to this repo, or you just want an easier life in the short term you can download all the code.

You can click the green `Clone or download` button and then choose the `Download ZIP`.

![Download as ZIP](/readme-images/download-as-ZIP.png "Download as ZIP")

You can then export the contents of the ZIP in the normal Mac or Windows method to access the files within.

### Option B - Clone the full repo

Choose this option if you want to keep up to date with changes made to the repo that are put on the cloud.

1. Firstly sign up for a Github [here](https://github.com/join).

2. Next you will need to install git if you have not done so already. First check if you already have git installed on your device. To do this, open the `Terminal` program on a Mac or the `Command Prompt` on a Windows device. Then type

```
git --version
```

and press enter. If it responds with the version number of git that means you have it installed already and you don't need to do the next step. If it says that it doesn't recognise the git command then you will need to install it onto your computer. Use these links to download the program for [Mac](https://git-scm.com/download/mac) or [Windows](http://git-scm.com/download/win).

3. Next navigate to the folder that you wish to save the code to in your command line/terminal. You do this using the change directory command. For example: When I turn on my terminal I by default am currently in my home directory. This means that I can navigate to folders like Documents, Downloads, Desktop and Applications (I'm on a Mac). This means I can go into any of these folders by writing into the terminal/command prompt:

```
cd Documents
```

That command would move me into the documents folder, then once I'm in the documents folder I can move into another folder that's inside Documents like so:

```
cd "my folder name"
```

In this case my folder has spaces inside the name so I needed to put speech marks around the folder name.

If you want to know which folders are available to move into in your current directory you can run the `ls` command on a Mac or the `dir` command on a Windows.

4. Now you are in the folder where you want to save your code you are going to copy or in github terminology "clone" the repo.

When you press the `Clone or download` button, make sure that the drop down says "Clone with HTTPS" (this tells the system to let you login with your user details rather than with a token saved to your device) and copy the http link listed in the drop down box, for this repo it will be `https://github.com/millisande/starter-google-text-scanner.git`

In your terminal/command line use the command:

```
git clone https://github.com/millisande/starter-google-text-scanner.git
```

Notice that we are saying to git to clone the repo with that http address we copied. If you ever want another github repo you will run the same command but change the http address.

### 2. Install NPM and node

In your terminal/command line check if you have "Node version manager" or nvm installed (installing node breaks nvm, if you have never worked with Node before then you probably haven't got this installed but worth checking just in case). In your terminal/command line write in:

```
nvm ls
```

If it responds with a lot of numbers then skip the next step. If it says that nvm isn't recognised then you will need to install Node and npm from this [website](https://nodejs.org/en/download/)

### 3. Set up Google Services

You need to sign up for a Google Cloud Account. [Sign up for the free trial](https://cloud.google.com/free/docs/gcp-free-tier).

Open the API tab Library from the left hand menu of the Google Cloud Dashboard.

![Open API Library](/readme-images/look-for-API.png "Open API Library")

Use the search bar to find the Cloud Vision API. Add that api to a (new) project.

![Find Cloud Vision API](/readme-images/find-cloud-API.png "Find Cloud Vision")

Go to the credentials tab and choose to Create a new service.

![Set up new credentials](/readme-images/API-credentials-page.png "Set up new credentials")

You will need to create a Service Account Key. Choose to create the key for the project you made and associated with the Cloud API call.

![Create service key](/readme-images/create-service-key.png "Create service key")

This will create a .json file, it should automatically download to your computer. Take that file and move it to the folder with this code.

Rename the file to something easy to remember like `service-key.json`

### 4. Install the dependencies of this repo

There are a bunch of packages (other people's code) which the application uses to make creating the app easier. You will need to install them to your computer to be able to run the application.

In your terminal/command line make sure that you are currently in this folder then run the command:

```
npm install
```

I have created a handy list of everything this application uses in the package.json file and this command knows to look for a file called package.json and download all of the packages that we need to run the application.

You are now ready to run your application.


## How to run the application

In your terminal/command line navigate to this folder. Then run the command:

```
export GOOGLE_APPLICATION_CREDENTIALS="service-key.json"
```

This is to tell your application the google credentials (like a password) needed to connect to the Google Vision API.

You will need to run this every time you restart the terminal/command line as the application will forget it if you close the terminal/command line. However, if you keep the terminal/command line open it will be remembered so you only need to use that command once.

Then to run the application write in the command:

```
node server.js
```

This will start the application. It will then be available to view at web address `localhost:1100`

It should then show you a very simple application which displays the text in the local image file called `image.jpg`.

![Website UI](/readme-images/website.png "Website UI")

## How might one edit this application

You can replace any of the content in the public folder with your own HTML, CSS and Javascript to create a more compelling website. Have a look at the function that I used to get the data about the image:

```

async mounted() {
    var result = await fetch('/detect');
    result = await result.json()
    console.log(result);
    this.message = result
  }

```

This could be put somewhere in your own Javascript to put the text where you need it. This uses Vue.js which you can read more about [here](https://vuejs.org/v2/guide/). However, Vue is designed for single web pages. This means that if you were happy to have an application that always has the Nav bar at the top or bottom using Vue might be a good solution as it's easy to learn. However, if you know you won't want at least one or two consistent elements across all your pages it might be more work to use Vue rather than using vanilla javascript or a different framework like React.js.

You can also think about editing the function so that the server will send an image determined by the front end to Google rather than always sending the image.jpg file.

Also if you want more AI maybe we could consider sending the text results from the image file to another natural language processor to pick out the key words which we could then look up definitions of.
