import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import { passportAuthenticate } from './utils/auth';
import connectionOptions from './ormConfig';
import schema from './schema';
import './utils/auth';

interface GetServiceResult {
  app: express.Application;
  server: ApolloServer;
}

const getServer = async (): Promise<GetServiceResult> => {
  await createConnection(connectionOptions);

  const server = new ApolloServer({
    schema,
    playground: true
  });
  const app = express();

  app.use(passportAuthenticate);

  app.get('/status', (_, res) => res.status(200).json({ success: true }));
  server.applyMiddleware({ app });

  return { app, server };
};

export default getServer;
