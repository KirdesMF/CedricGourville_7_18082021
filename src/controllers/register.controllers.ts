import { Request, Response } from 'express';
import { httpStatus } from '../utils/http-status';
import { RegisterServices } from '../services/register.services';

async function registerUser(req: Request, res: Response) {
  try {
    const user = await RegisterServices.createUser(req.body);
    res.status(httpStatus.OK).json(user);
  } catch (error) {
    res.status(httpStatus.forbidden).json({ message: error.message });
  }
}

export const RegisterControllers = {
  registerUser,
};
