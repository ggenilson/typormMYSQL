import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.indexOne);
routes.post('/createUser', UserController.create);
// route.delete('/users', );

export default routes;
