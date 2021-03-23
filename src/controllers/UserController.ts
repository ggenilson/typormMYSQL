import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export const index =  async (req: Request, res: Response): Promise<Response> => {
  await getRepository(User).find();
}