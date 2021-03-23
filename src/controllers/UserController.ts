import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../database/entities/User';

export class UserController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await getRepository(User).find();

    return res.json(users);
  }

  async indexOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = await getRepository(User).findOne(id);

    if (!user) {
      res.res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const user = getRepository(User).create(req.body);

    const result = await getRepository(User).save(user);

    return res.json(result);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = getRepository(User).findOne(id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }

    getRepository(User).merge(user, req.body);

    const result = await getRepository(User).save();

    return res.json(result);
  }
}

export default new UserController();
