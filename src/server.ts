import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.listen(3000, () => console.log("Server is running!"));