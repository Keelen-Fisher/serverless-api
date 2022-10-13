'use strict';
// third party library
const dynamoose = require('dynamoose');
// continued in local code

// Schema
const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  number: String,
})

// Model create
const peopleModel = dynamoose.model('people-table', peopleSchema);

exports.handler = async (event) => {
  console.log('Create Check---------', event.body);

  // extracting from the body
  let parsedBody = JSON.parse(event.body);
  let { id, name, number } = parsedBody;


  // Plan b from lecture
  let people = {id, name, number}
  console.log('checking the people--------', people);

  const response = {statusCode: null, body: null};

  try
  {
    let newPeople = await peopleModel.create(people);
    response.statusCode = 200;
    response.body = JSON.stringify(newPeople);
  }
  catch (e)
  {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};
