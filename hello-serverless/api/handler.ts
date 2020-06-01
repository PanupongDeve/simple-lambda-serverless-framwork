import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';



const output = {
  message: 'hello serverless'
}



export const hello:APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}