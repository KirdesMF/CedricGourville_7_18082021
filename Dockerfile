# syntax=docker/dockerfile:1
FROM node:current-alpine as development
ENV NODE_ENV development
ENV TZ Europe/Paris
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD npm run dev

FROM development as builder
RUN npm run build

FROM nginx:stable-alpine as production
ENV NODE_ENV production
RUN rm -rf ./usr/share/nginx/html/*
COPY --from=builder /app/build ./usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]