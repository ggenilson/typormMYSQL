import { createConnection } from 'typeorm';

import path from 'path';

// import User from './entities/User';

path.resolve(__dirname, 'entities')
export const connection = async () => { 
  return createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    database: 'typeormtest',
    username: "root",
    password: "",
    synchronize: true,
    entities: ['./entities/**/*.ts'],
    logging: true
  })
  .then((data) => {
    console.log('Database is now connected! ', data.name);
  })
  .catch((err) => {
    console.log('Database is not connected! ', err);
  }) 
}