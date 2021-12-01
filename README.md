push db: `cd backend && npx prisma db push && cd ..`

migrate: `cd backend && npx prisma migrate dev`

# P7 Groupomania OpenClassroom

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

After installing the dependencies, you can start the server and the client in a docker container:

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

## Shutdown

You can run the following command to shutdown the containers:

- client: `cd client && npm docker:dev:stop`
- server: `cd server && npm docker:dev:stop`

## Notes

🚧 In progress 🚧

Frontend can also be start outside of a docker container, but it's not recommended. I have encountered some issues with authorisations, so I recommend to use docker for now

## Deploy

🚧 In progress 🚧
