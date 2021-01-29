######################################################################
FROM node:14.15.4-alpine as dev-dependencies
######################################################################
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install


######################################################################
FROM node:14.15.4-alpine as builder
######################################################################
WORKDIR /app
COPY --from=dev-dependencies /app /app
COPY apps/api apps/api
COPY libs/shared libs/shared
COPY angular.json nx.json tsconfig.base.json ./
ENV NODE_ENV production
RUN $(npm bin)/ng build api --prod --configuration=docker
RUN cd dist/apps/api && ls

CMD ["node", "dist/apps/api/main.js"]
