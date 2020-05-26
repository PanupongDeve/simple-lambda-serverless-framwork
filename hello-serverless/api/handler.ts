import { APIGatewayProxyHandler } from 'aws-lambda';
import * as serverless from 'serverless-http';
import * as express from 'express';
import 'source-map-support/register';

const app = express();

app.get('/api', function (req, res) {
  res.send('Hello World!')
})



export const hello:APIGatewayProxyHandler = serverless(app);