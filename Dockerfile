# syntax=docker/dockerfile:1
FROM node:16-alpine AS base

ENV NODE_ENV development
WORKDIR /app

RUN apk update && apk add bash && rm -rf /var/cache/apk/*

COPY wait-for-it.sh ./wait-for-it.sh
COPY package*.json ./

RUN npm install

COPY . .

FROM base as production

ENV NODE_ENV production









