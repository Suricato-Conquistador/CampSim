import { Request, Response } from 'express';
import { ClubeService } from '../services/clube.service';
import { SuccessDTO } from '../types/success';

const service = new ClubeService();

export const createClube = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;
    const { body } = req;

    const clube = await service.createClube(body);

    return res.status(201).json({
        error: false,
        message: 'Dados criados com sucesso!',
        data: clube,
    });
};

export const getAllClubes = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;

    const clubes = await service.getAllClubes();

    return res.status(200).json({
        error: false,
        data: clubes,
    });
};

export const getClubeById = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const clube = await service.getClubeById(Number(id));

    return res.status(200).json({
        error: false,
        data: clube,
    });
};

export const updateClube = async (req: any, res: Response<SuccessDTO>) => {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateClube(Number(id), body);

    return res.status(200).json({
        error: false,
        message: 'Dados atualizados com sucesso!',
        data: result,
    });
};

export const deleteClube = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const result = await service.deleteClube(Number(id));

    return res.status(204).json({
        error: false,
        message: 'Dados removidos com sucesso!',
    });
};
