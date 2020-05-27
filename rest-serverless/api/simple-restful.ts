import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';


export const create: APIGatewayProxyHandler = async (event, _context) => {


    const output = {
        message: 'I am Create'
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const update: APIGatewayProxyHandler = async (event, _context) => {
    const { id }  = event.pathParameters;

    const output = {
        message: 'I am Update',
        id
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const remove: APIGatewayProxyHandler = async (event, _context) => {
   const { id }  = event.pathParameters;

    const output = {
        message: 'I am Delete',
        id
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const getById: APIGatewayProxyHandler = async (event, _context) => {

    const { id }  = event.pathParameters;

    const output = {
        message: 'I am GetById',
        id
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const getAll: APIGatewayProxyHandler = async (event, _context) => {


    const output = {
        message: 'I am GetAll'
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}
