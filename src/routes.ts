import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
// route.post('/users', );
// route.put('/users', );
// route.delete('/users', );

export default routes;
