import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const add: APIGatewayProxyHandler = async (event, _context) => {
    let {
        num1,
        num2
    } = JSON.parse(event.body);

    const output = {
        num1,
        num2,
        result: num1 + num2,
        query: event.queryStringParameters,
        multiQuery: event.multiValueQueryStringParameters
      }

      console.log(output);
  return {
    statusCode: 200,
    body: JSON.stringify(output, null, 2),
  };
}
