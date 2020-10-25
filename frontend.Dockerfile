### STAGE 1: install ###
FROM node:12-alpine AS dev-dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

### STAGE 2: build ###
FROM node:12-alpine as builder
WORKDIR /app
COPY --from=dev-dependencies /app /app
COPY . .
RUN npm install -g nx
RUN nx build finder

### STAGE 3: Run ###

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf


WORKDIR /usr/share/nginx/html
COPY ./dist/apps/finder .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
