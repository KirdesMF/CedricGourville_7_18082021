# syntax=docker/dockerfile:1
FROM node:alpine3.11 as base
ENV TZ Europe/London
WORKDIR /app
COPY package*.json wait-for-it.sh prisma /app/
RUN apk update && apk add bash && rm -rf /var/cache/apk/* 

# development
FROM base as development
ENV NODE_ENV development
RUN npm install
COPY . .
CMD ./wait-for-it.sh mysql-host:3306 -t 0 -- npm run start:dev

# prisma studio
FROM base as studio
WORKDIR /app
COPY --from=development /app/node_modules/prisma ./node_modules
CMD ./wait-for-it.sh mysql-host:3306 -t 0 -- npx prisma studio

# builder for prod
FROM development as builder
RUN npm run build

# cleaner for prod
FROM development as cleaner
RUN npm install --production
RUN npm cache clean --force  

#production 
FROM base as production
ENV NODE_ENV production
COPY --from=cleaner /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
CMD ./wait-for-it.sh mysql-host:3306 -t 0 -- npm run start:prod













