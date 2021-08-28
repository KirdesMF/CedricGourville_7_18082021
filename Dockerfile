# syntax=docker/dockerfile:1
FROM node:16-alpine as base

WORKDIR /app
COPY package*.json wait-for-it.sh prisma /app/
RUN apk update && apk add bash && rm -rf /var/cache/apk/* 

# development
FROM base as development
ENV NODE_ENV development
WORKDIR /app
RUN npm install
COPY . .
RUN npm run build
CMD ./wait-for-it.sh mysql-host:3306 -t 0 -- npm run start:dev

# prisma studio
FROM development as studio
CMD npx prisma studio

# builder for prod
FROM base as builder
WORKDIR /app
RUN npm prune --production

#production 
FROM base as production
ENV NODE_ENV production

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=development /app/dist ./dist
CMD ./wait-for-it.sh mysql-host:3306 -t 0 -- npm run start:prod













