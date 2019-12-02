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

export interface APIResult<T> {
  ok: boolean;
  message: string | null;
  result: T | null;
}
