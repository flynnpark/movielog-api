import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer, gql } from 'apollo-server-express';
import connectionOptions from './ormConfig';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (): string => 'Hello world!'
  }
};

const getServer = async (): Promise<{ app: express.Application; server: ApolloServer }> => {
  await createConnection(connectionOptions);

  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();

  app.get('/', (req, res) => res.status(200).json({ success: true }));
  server.applyMiddleware({ app });

  return { app, server };
};

export default getServer;
