#Parse-compatible API server module for Node/Express

## Install nodejs-legacy package (Only Linux distributions based on Debian)
`sudo apt-get install nodejs-legacy`

> In summer 2012 Debian maintainers decided to rename Node.js executable to prevent some kind of namespace collision with another package. It was very hard decision for Debian Technical Committee, because it breaks backward compatibility.

## Install npm package
`sudo apt-get install nodejs-legacy`

## Install Essential Packages
`sudo npm install`

## Run Server
### Basic
`sudo npm start`

### Forever CLI Tool
First install forever package (`sudo npm install forever -g`)

#### commands
* `sudo forever start index.js`: Run Server
* `sudo forever restart`: Restart the daemon script
* `sudo forever list`: List forever scripts
* `sudo forever stop <pid>`: Stop forever scripts send args pid script
