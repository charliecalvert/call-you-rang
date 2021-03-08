## Overview

Basic node server with support for:

- webpack
- babel
- nodemon
- bower (For legacy code only. Don't use in most cases)

To run:

    npm i
    npm run build
    npm start

## Client Side

Start your client side code by editing **source/control.js**

## Server Side

The usual Node JS code in **views** and **routes**.

## Inside Docker Container

- apt update
- apt install curl
- curl micro-qux:30027
- curl -IL micro-qux:30027

## Key Commands

- docker container ls -a
- docker image ls
- docker image rm 81c8ee471f4f
- docker network inspect myNetwork
- ./build
- ./reset
- docker network connect myNetwork call-you-rang