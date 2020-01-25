import serverless, { Handler } from 'serverless-http';
import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult
} from 'aws-lambda';
import getServer from './app';

let serverlessApp: Handler;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  if (!serverlessApp) {
    const { app } = await getServer();
    serverlessApp = serverless(app);
  }
  return serverlessApp(event, context);
};
