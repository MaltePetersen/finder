### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf


WORKDIR /usr/share/nginx/html
COPY ./dist/apps/finder .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
