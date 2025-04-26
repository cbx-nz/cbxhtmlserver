
# cbxhtmlserver

Use as a Template for an HTML Website with the files including a server.js http server, read the steps before using

## Initiate

### Step 1

Export and Import to a Local Folder

### Step 2

In Terminal, Send `npm init` and install the following either on entire computer (npm install -g {package}) or only in folder (npm install -D {package}): `express`, `chalk`, `open`, `nodemon`. open is not required if using basicserver.js

### Step 2.5

create a `.env` file for `PORT=` followed by what port you want/selected and is also need to be changed/set in server.js/basicserver.js and forwarding

### Step 3

If you want to use a more basic version of server.js which is just without DevTunnels (VSC), you can use the basicserver.js but it is localhost only unless you forward the port

### Step 4

put your website files in public/ and your js/css files into the assets/, any image files go into assets/img, link the js/css/image into the html and whatever else you need to do to make it work.

### Step 5 -- Run Server

In terminal, Send `nodemon server.js` or `nodemon basicserver.js`

### Github Initiate

If you know how to init a git repo which you should, otherwise look online.

### Features of the JS Server Files

#### server.js
> automatically opens localhost tab when run\
> better for devtunnels
#### basicserver.js
> localhost only\
> doesn't open when run
