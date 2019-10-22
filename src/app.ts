import express from 'express';
import { createConnection } from 'typeorm';
import connectionOptions from './ormConfig';

const getServer = async (): Promise<express.Application> => {
  await createConnection(connectionOptions);

  const app = express();

  app.get('/', (req, res) => res.status(200).json({ success: true }));

  return app;
};

export default getServer;
