# Finder

A university project to build a file explorer with Angular and the progressive Node-JS Framework Nest-Js
To organize the project we are using NX.

## Summary

- [Getting Started](#getting-started)
- [Runing the tests](#running-the-tests)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Documentation](#documentation)
- [Authors](#authors)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

    Docker
    Docker-Compose
    npm

### Installing

For development we recommend using npm directly

Installing npm

    https://www.npmjs.com/get-npm

Download the dependencies

npm install

Download nx

    npm install -g nx

Run the frontend

    nx serve finder

run the backend

    nx serve api

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

## Deployment

The project comes shipped with two docker images for the backend and frontend.
You can use the docker-compose file to start both together with

    docker image build -t frontend -f frontend.Dockerfile .
    docker image build -t backend -f backend.Dockerfile .
    docker-compose up

With this config the application should be easily deployed on any server

## API Documentation

For the API Documenation we stick to the Open Api 3.0 specification.  
Our API Documentation can be found after serving the frontend under localhost:3333/api

## Documentation

The Angular Application structure can be explored through the documentation tool compodoc.
Compodoc has some pending problems with Angular 10 therefore we using a workaround with an
shell script.
To generate the documentation just run

    npm run-script documentation

and to explore it install a web-server like test-server and serve it locally like this

    npm run-script serve-doc

to explore the documentation go to localhost:8080

## Authors

- **Johanna Flechtner** -
- **Malte Petersen** -

# NX Explanation

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@finder/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
