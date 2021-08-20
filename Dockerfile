# syntax=docker/dockerfile:1
FROM node:16-alpine as base
ENV NODE_ENV development

WORKDIR /app

RUN apk update && apk add bash
COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

COPY . .


FROM base as test
ENV NODE_ENV test

FROM base as production
ENV NODE_ENV production
ENV NODE_PATH=./dist


FROM base as migrate



