# serverless-api

## Feature Tasks & Requirements

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

- Database: DynamoDB
  - 1 Table required

- Routing: API Gateway
  - POST
    - /people - Given a JSON body, inserts a record into the database
    - returns an object representing one record, by its id (##)

  - GET
    - /people - returns an array of objects representing the records in the database
    - /people/## - returns an object representing one record, by its id (##)

  - PUT
    - /people/## - Given a JSON body and an ID (##), updates a record in the database
    - returns an object representing one record, by its id (##)

  - DELETE
    - /people/## - Given an id (##) removes the matching record from the database
    - returns an empty object
  
  - CRUD Operation Handlers: Lambda Functions

## Implementation Notes

- Create one table for one data model at Dynamo DB\
- Create a Dynamoose schema to define the structure of your table

- Write lambda functions that will separately perform the proper CRUD operation on the database

- Create your routes using API Gateway
  - Routes should integrate with the appropriate Lambda function to perform the operation

## Deployment

- As a baseline, deployment should be done manually, with .zip files containing the required files, uploaded to each function. As a stretch goal, you should endeavor to have your functions automatically deployed on all checkins to your main branch

## Documentation

Provide a UML diagram showcasing the architecture of your API

Document the data and program flow for your API, including the mapping of Routes and Functions, as well as the flow of data.

- What are the routes?

***Create***
***Read***
***Update***
***Delete***

- What inputs do they require?
Each require a json object within the Request Body

- What output do they return?
Returns object with id, name, and number.
