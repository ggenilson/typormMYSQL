import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
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
      res.status(404).json({ message: 'User not found' });
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

    try {
      let user = await getRepository(User).findOne(id);

      if (!user) {
        res.status(404).json({ message: 'User not found' });
      }

      user = {
        ...user,
        ...req.body,
      };

      await getRepository(User).save({ ...user });

      // getRepository(User).merge(id, req.body
      // const userUpdated = await getRepository(User).findOne(id);

      // const result = await getRepository(User).save(userUpdated);

      return res.json(user);
    } catch (err) {
      throw new Error('An error ocurred');
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = await getRepository(User).findOne(id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }

    await getRepository(User).delete(id);

    return res.json({ message: 'User removed with success' });
  }
}

export default new UserController();
