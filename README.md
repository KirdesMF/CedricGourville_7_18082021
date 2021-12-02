# P7 Groupomania OpenClassroom

## Stack

you can find all dependencies in package.json

### Client

- react
- radix ui
- radix icon + some heroicons
- react hooks form
- react-query
- react-router-dom
- socket.io

### Server

- bcrypt
- cookie-parser
- cors
- express
- multer
- prisma

## Installation

⚠️ Before start, please make sure you have the following things:

    - a `.env` files in the root of the `server` folder (see `.env.example`)
    - Images are stored in the cloud (ImageKit.io), you'll also need to provide imagekit credentials in the `.env` file
    - docker is installed and running

[imagekit link](https://imagekit.io/)

To start the project, first install client and server dependencies:

client : in your terminal `cd client && npm install`

server : in your terminal `cd server && npm install`

or you can use the following command:

`cd server && npm install && cd .. && cd client && npm install && cd ..`

⚠️ This project needs `docker` and `docker-compose` to be installed on your machine.

ℹ️ Docker will install all dependencies inside the containers, the first time it can take a some times.

After installing the dependencies, you can start the server and the client in a docker container:

ℹ️ Docker will install all dependencies inside the containers, the first time it can take a some times.
and you may have to wait a few minutes that mysql is ready.

In dev mode, you'll have 4 containers:

- client 1 container

  - the client application

- server 3 containers

  - the server application
  - the database
  - prisma studio

Here are the commands to start the containers:

- client: `cd client && npm docker:dev:start`
- server: `cd server && npm docker:dev:start`

Actually, containers are in detached mode, so if you want to check what's log in the server, you can check that in the docker app, container name => `api-host`

this will also start the front application in the browser [http://localhost:3000](http://localhost:3000/)

## Seed (optionnal)

Prisma provide a way to seed the database automatically. when a migration happens or when you push the database, the seed will be executed.

you can also manually seed the database with the following command, once evertyhing is installed and started:

from docker CLI in `api-host` container:

`npx prisma seed`

from you IDE, you'll' have to toggle the `host` in the `.env` file before running the command.

Once the seed is done, you can start the front application in the browser [http://localhost:3000](http://localhost:3000/)
and you'll have new user and post (see `server/prisma/seed.ts`)

## Database

you can use prisma studio (see [http://localhost:5555/](http://localhost:5555/)), to edit a user, post, like, comment, etc.

## Shutdown

You can run the following command to shutdown the containers:

- client: `cd client && npm docker:dev:stop`
- server: `cd server && npm docker:dev:stop`

## Notes

🚧 In progress 🚧

- Frontend can also be start outside of a docker container, but it's not recommended. I have encountered some issues with authorisations, so I recommend to use docker for now
- I need to push docker images to docker hub, so during installation, you may see some warnings
- Images are stored in the cloud (ImageKit.io), to ensure that, I create a docker volume to store images before send them to the cloud, it helps me to avoid the cost of storing images on the local machine, and I can controll the size of the images on the backend (free plan on Imagekit.io so I try to keep the size of the images under 2.5Mo)

## Deploy

🚧 In progress 🚧

## TODO

- EN / FR
- docker hub
- deploy
- socket
- ⚠️ fix ts path import in client
- give user permission to add alt text to images

## Could be good

- lazy loading posts
- add a chat
- take pictures from device / cam
- add multiple images to post
