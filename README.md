
# cbxhtmlserver

Use as a Template for an HTML Website with the files including a server.js http server, read the steps before using \
the tutorials below can be if you want for your website to be in a github repo or your own folder\
Table of contents \

- [Initiate using whatever IDE](#initiate)
- [Git Init the Folder](#git-initiate)
- [Features of the JS Server files](#features-of-the-js-server-files)
- [Using Visual Studio Code with Git](#using-vsc-with-git) More Detailed Tutorial (might work with other IDEs)

## Initiate

download node.js for your computer

### Step 1

Export and Import to a Local Folder

### Step 2

In Terminal, Send `npm init` and install the following either on entire computer (npm install -g {package}) or only in folder (npm install -D {package}): `express`, `chalk`, `open`, `nodemon`. open is not required if using basicserver.js, nodemon is not required but if you want to use it you can

### Step 2.5

create a `.env` file for `PORT=` followed by what port you want/selected and is also need to be changed/set in server.js/basicserver.js and forwarding

### Step 3

If you want to use a more basic version of server.js which is just without DevTunnels (VSC), you can use the basicserver.js but it is localhost only unless you forward the port

### Step 4

put your website files in public/ and your js/css files into the assets/, any image files go into assets/img, link the js/css/image into the html and whatever else you need to do to make it work.

### Step 5 -- Run Server

In terminal, Send `node server.js` or `node basicserver.js`

### Git-Initiate

If you know how to init a git repo which you should, otherwise look online.

### Features of the JS Server Files

#### server.js

> automatically opens localhost tab when run\
> if you want to use devtunnels\
> better for testing your small website

#### basicserver.js

> doesn't open when run\
> better for actual server use

#### upnp.js

> easy version rather than use port forwarding if want public\
> make sure router has UPnP on\
> install `npm install nat-upnp` to be able to run (and install everything required in basicserver.js)\
> some ISP/enterprise places may not have UPnP available.\

## Using VSC with Git

### Tutorial

Fork this Github Repository then start on Step 2 and Ignore Step7-8. If not forking, do the following \

1. Create a Github Repository on the website
2. Open Visual Studio Code
3. Open the Remote Repositories Tab on the left bar area
4. press + icon and select your github repository
5. on the Search bar in VSC type this command: `>Remote Repositories: Continue working in New Local Clone`
6. Select a local destionation for your webserver / repository.
7. Download a zip of the github files of cbxhtmlserver repo
8. extract to the local repository folder
9. start on [nodejs Tutorial](#initiate)
