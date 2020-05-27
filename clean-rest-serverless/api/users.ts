import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { userController } from '../controller/UserController';
import { User } from '../entities/users/User';

export const create: APIGatewayProxyHandler = async (event, _context) => {


    const user: any = JSON.parse(event.body);
   

    const users: User[] = await userController.create(user);
    
    const output = {
        message: 'I am Create',
        users
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const update: APIGatewayProxyHandler = async (event, _context) => {
    const { id }  = event.pathParameters;
    const user: any = JSON.parse(event.body);

    const users: User[] = await userController.updateById(id, user);

    const output = {
        message: 'I am Update',
        id,
        users
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const remove: APIGatewayProxyHandler = async (event, _context) => {
   const { id }  = event.pathParameters;
   const users: User[] = await userController.removeById(id);
    const output = {
        message: 'I am Delete',
        id,
        users
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const getById: APIGatewayProxyHandler = async (event, _context) => {

    const { id }  = event.pathParameters;
    
    const user: User = await userController.getById(id);

    const output = {
        message: 'I am GetById',
        id,
        user
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}


export const getAll: APIGatewayProxyHandler = async (event, _context) => {
    const users: User[] = await userController.getAll();

    const output = {
        message: 'I am GetAll',
        users
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}
