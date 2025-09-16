import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { SuccessDTO } from '../types/success';

const service = new UserService();

export const viewOwner = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;

    const user = await service.getOwner(userId);

    return res.status(200).json({
        error: false,
        data: user,
    });
};

export const getUserById = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const user = await service.getUserById(Number(id));

    return res.status(200).json({
        error: false,
        data: user,
    });
};

export const updateUser = async (req: Request, res: Response<SuccessDTO>) => {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateUser(Number(id), body);

    return res.status(200).json({
        error: false,
        message: 'Dados atualizados com sucesso!',
        data: result,
    });
};

export const deleteUser = async (req: Request, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const result = await service.deleteUser(Number(id));

    return res.status(204).json({
        error: false,
        message: 'Dados removidos com sucesso!',
    });
};
