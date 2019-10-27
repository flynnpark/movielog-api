import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer, gql } from 'apollo-server-express';
import connectionOptions from './ormConfig';
import schema from './schema';

const getServer = async (): Promise<{ app: express.Application; server: ApolloServer }> => {
  await createConnection(connectionOptions);

  const server = new ApolloServer({
    schema,
    playground: true
  });
  const app = express();

  app.get('/status', (req, res) => res.status(200).json({ success: true }));
  server.applyMiddleware({ app });

  return { app, server };
};

export default getServer;
