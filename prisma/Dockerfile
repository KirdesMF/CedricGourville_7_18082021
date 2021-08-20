FROM node:16-alpine as base


ENV NODE_ENV development
WORKDIR /app

COPY ./ ./prisma/

RUN npm i prisma

COPY . .


