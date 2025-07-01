import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { SuccessDTO } from '../types/success';

const service = new AuthService();

export const register = async (req: Request, res: Response<SuccessDTO>) => {
    const { body } = req;

    const user = await service.register(body);

    return res.status(201).json({
        error: false,
        message: 'Cadastro realizado com sucesso!',
        data: user,
    });
};

export const login = async (req: Request, res: Response<SuccessDTO>) => {
    const { body } = req;

    const result = await service.login(body);

    res.status(200).json({
        error: false,
        message: 'Login realizado com sucesso!',
        data: result,
    });
};
