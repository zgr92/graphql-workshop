# Setup

## Install Node.js
Node.js 14 is required (14.15.0 should work, it can't be higher than 14) to use the example server - https://nodejs.org/en/download/. 
To switch version to 14 this tool can be useful - https://github.com/tj/n

## Install Yarn
https://classic.yarnpkg.com/lang/en/docs/install/

## Install MongoDB
https://www.mongodb.com/docs/manual/installation/ - make sure to not skip the section named "Run MongoDB" after
following installation steps

## Clone and setup example GraphQL server
To run the example queries we will use this example server - https://github.com/graphql-compose/graphql-compose-examples.

### Cloning from Github:
```shell
$ git clone git@github.com:graphql-compose/graphql-compose-examples.git
````
or
```shell
$ git clone https://github.com/graphql-compose/graphql-compose-examples.git
````
or simply download zip file by clicking on "code" button
### Setup
Go into the downloaded folder and install packages:
```shell
$ cd graphql-compose-examples
$ yarn install
$ yarn seed && yarn dev
```
open http://localhost:3000, go to http://localhost:3000/northwind, a graphQL playground should be displayed.
Copy this query:
```graphql
{
    viewer {
        productList {
            productID
            name
        }
    }
}
```
and paste it to the editor in the left column. Run the query.
Make sure that you get the results on the right column. If not, make sure you did all the previous steps in this instruction,
for example check if your MongoDB process is running.

## Run server
```shell
$ yarn dev
```
Open http://localhost:3000/northwind.

# Structure
This repository contains folder `Playground` with example queries and excises that will be used in GraphQL playground to learn and practice some GraphQL features.
`Solution` folder in `Playground` contains solved exercises, so it's better if you don't go there unless you tried to do the exercise first.
In `App` folder you can find an example of GraphQL query usage on a website written in Javascript.