'use strict';
// third party library
const dynamoose = require('dynamoose');

//  continued in code locally


const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  number: String
});

// create a model

const peopleModel = new dynamoose.Schema('people-table', peopleSchema);

exports.handler = async (event) => {
    // TODO implement
    console.log('This is the test for people---------', event.queryStringParameters);

    const response = {statusCode: null, body: null};

    try{
      let peopleRecords = await peopleModel.scan().exec();
      response.statusCode = 200;
      response.body = JSON.stringify(peopleRecords)
    }
    catch (e){
      console.log(e);
      response.statusCode = 500;
      response.body = JSON.stringify(e.message);
    }
    return response;
};

