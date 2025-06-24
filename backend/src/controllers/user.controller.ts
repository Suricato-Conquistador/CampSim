import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const service = new UserService();

export const viewOwner = async (req: any, res: Response) => {
  try {
    const userId = req.userId;

    const user = await service.getOwner(userId);

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getUserById = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const user = await service.getUserById(Number(id));

    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

//Melhorar retorno
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateUser(Number(id), body);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

//Melhorar retorno
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await service.deleteUser(Number(id));

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
