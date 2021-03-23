import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export class UserController {
  async index (req: Request, res: Response): Promise<Response> {
    const users = await getRepository(User).find();

    return res.json(users);
  }
}

export default new UserController();