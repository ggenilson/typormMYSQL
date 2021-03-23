import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/createUser', UserController.create);
// route.put('/users', );
// route.delete('/users', );

export default routes;
