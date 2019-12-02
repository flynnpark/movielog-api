import serverless from 'serverless-http';
import getServer from './app';
import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult
} from 'aws-lambda';

let serverlessApp: ServerlessHttp.LambdaPartial;

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
