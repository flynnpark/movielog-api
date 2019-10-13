import serverless from 'serverless-http';
import getServer from './app';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

declare namespace ServerlessHttp {
  type FrameworkApplication = {
    callback: Function;
    handle: Function;
    router: {
      route: Function;
    };
    _core: {
      _dispatch: Function;
    };
  };
  type HandlerCompatibleApp = Function | Partial<FrameworkApplication>;
  type LambdaPartial = (
    event: AWSLambda.APIGatewayProxyEvent,
    context: AWSLambda.Context
  ) => AWSLambda.APIGatewayProxyResult;
}

let serverlessApp: ServerlessHttp.LambdaPartial;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  if (!serverlessApp) {
    const app = await getServer();
    serverlessApp = serverless(app);
  }
  return await serverlessApp(event, context);
};
