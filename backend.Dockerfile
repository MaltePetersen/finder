######################################################################
FROM node:12-alpine as dev-dependencies
######################################################################
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install


######################################################################
FROM node:12-alpine as builder
######################################################################
WORKDIR /app
COPY --from=dev-dependencies /app /app
COPY apps/api apps/api
COPY libs/api-interfaces libs/api-interfaces
COPY angular.json nx.json tsconfig.base.json ./
ENV NODE_ENV production
RUN $(npm bin)/ng build api --prod
RUN cd dist/apps/api && ls

CMD ["node", "dist/apps/api/main.js"]
