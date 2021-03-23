import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import routes from './routes';

import { connection } from './database/connection';

async function mainServer() {
  await connection();

  const app = express();

  //middlewares
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.listen(3333, () => console.log('Server is running!'));
}

mainServer();
