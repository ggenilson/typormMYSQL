import 'reflect-metadata'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {createConnection} from 'typeorm';


const app = express();

createConnection();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(3000, () => console.log("Server is running!"));