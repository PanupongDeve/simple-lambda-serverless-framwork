import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import { usersPresenter } from '../useCases/users/UsersPresenter';
import { usersCreator } from '../useCases/users/UsersCreator';
import { User } from '../entities/users/User';

export const create: APIGatewayProxyHandler = async (event, _context) => {


    const user: any = JSON.parse(event.body);
   

    const users: User[] = await usersCreator.createUser(user);
    
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
    
    const user: User = await usersPresenter.getUserById(id);

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
    const users: User[] = await usersPresenter.getUsers();

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
