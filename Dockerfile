# syntax=docker/dockerfile:1
FROM node:16-alpine as base

WORKDIR /app

RUN apk update && apk add bash
COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

COPY package*.json ./
COPY prisma ./prisma/

COPY . .


FROM base as development
ENV NODE_ENV development
RUN npm install

FROM base as production
ENV NODE_ENV production
RUN npm install --production








