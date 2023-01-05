# Setup

## Install Node.js
Node.js 14 is required (exactly this version, not lower, not higher) to use the example server - https://nodejs.org/en/download/. 
To switch version to 14 this tool can be usefull - https://github.com/tj/n

## Install Yarn
https://classic.yarnpkg.com/lang/en/docs/install/

## Install MongoDB
https://www.mongodb.com/docs/manual/installation/

## Clone and setup example GraphQL server
To run the example queries we will use this example server - https://github.com/graphql-compose/graphql-compose-examples.
```shell
$ git clone git@github.com:graphql-compose/graphql-compose-examples.git
$ yarn install
$ yarn seed && yarn dev
```
open http://localhost:3000, go to http://localhost:3000/northwind, a graphQL playground should be displayed

## Run server
```shell
$ yarn dev
```
Open http://localhost:3000/northwind.

# Structure
Folder `Playground` contains example queries and excises that will be used in GraphQL playground to learn and practice some GraphQL features.
`Solution` folder in `Playground` contains solved excercises, so it's better if you don't go there unless you tried to do the exercise first.
In `App` folder an example of GraphQL query usage on a website with Javascript can be found.