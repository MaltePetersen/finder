# Finder
A university project to build a file explorer with Angular and the progressive Node-JS Framework Nest-Js
To organize the project we are using NX.

A **live demo** can be found [**here**](http://v2202009128825126515.megasrv.de/login).
The **users credentials** for the default user are: 

|Username|Password|
|--------|--------|
|admin   |admin   |


## Summary
-  [Getting Started](#getting-started)

-  [Deployment](#deployment)

-  [Runing the tests](#running-the-tests)

-  [API Documentation](#api-documentation)

-  [Docker Documentation](#docker-documentation)

-  [Documentation](#documentation)

-  [Authors](#authors)
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites
What things you need to install the software and how to install them

 - Docker 
 - Docker-Compose 
 - npm 
 - compodoc

### Installing
For development you need to install [npm](https://www.npmjs.com/get-npm)
After that you need to download the dependencies:

    npm install

You will also need to install nx, we recommend to download it globally: 

    npm install -g nx

Run the frontend:

    nx serve finder
    
Run the backend:

    nx serve api

## Deployment
The project comes shipped with two docker images for the backend and frontend.
You can use the docker-compose file to start both together with

    npm run-script docker:buildFrontend
    npm run-script docker:buildBackend  
    npm run-script docker:run

With this config the application should be easily deployed on any server
## Running the tests
To run the unit tests for the backend run

    nx test finder

To run the unit test for the frontend run

    nx test api

### Break down into end to end tests
To run the e2e Test for the frontend run  

    nx e2e finder

  ### And coding style tests
  
To lint a project run

    nx lint <project>

## API Documentation
For the API Documenation we stick to the Open Api 3.0 specification.
Our API Documentation can be found after serving the frontend under:

    localhost:3333/api

## Docker Documentation

A docker images and docke compose files can seem cryptic easily.
To make our config more understandable just run:

    npm run-script documentation:docker

A picture will be generated with the name:

     docker-compose.png

which shows you how the containers, networks and volumes definded in our docker compose file are connected.

## Documentation
The Angular Application structure can be explored through the documentation tool compodoc.
Compodoc has some pending problems with the curent nest.js version because of that only the Services
are documented.

    npm run-script documentation:frontend

or

    npm run-script documentation:backend

to explore the documentation go to:

     localhost:8080

 

## Authors
-  **Johanna Flechtner** -

-  **Malte Petersen** -


