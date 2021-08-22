FROM node:16-alpine


ENV NODE_ENV development
WORKDIR /app

COPY ./ ./prisma/

RUN npm i prisma

COPY . .


