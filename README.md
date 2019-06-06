# starter-google-text-scanner
A very simple web application which displays the text from an image

## Set up

- 1 Download this repository of code (repo)
- 2 Install npm and Node
- 3 Set up Google Services
- 4 Install the dependencies of this repo

### 1 Download this repository of code

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

### Install NPM and node

In your terminal/command line check if you have "Node version manager" or nvm installed (installing node breaks nvm, if you have never worked with Node before then you probably haven't got this installed but worth checking just in case). In your terminal/command line write in:

```
nvm ls
```

If it responds with a lot of numbers then skip the next step. If it says that nvm isn't recognised then you will need to install Node and npm from this [website](https://nodejs.org/en/download/)

### Set up Google Services


### Install the dependencies in the repo



//Run this in command line first
//export GOOGLE_APPLICATION_CREDENTIALS="service.json"
