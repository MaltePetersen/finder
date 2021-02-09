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
RUN nx build finder --prod

### STAGE 3: Run ###

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf


COPY --from=builder /app/dist/apps/finder  /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
