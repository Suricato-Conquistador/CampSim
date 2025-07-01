import { Request, Response } from 'express';
import { EstatisticaService } from '../services/estatistica.service';
import { SuccessDTO } from '../types/success';

const service = new EstatisticaService();

export const createEstatistica = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;
    const { body } = req;

    const estatistica = await service.createEstatistica(body);

    return res.status(201).json({
        error: false,
        message: 'Dados criados com sucesso!',
        data: estatistica,
    });
};

export const getAllEstatisticas = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;

    const estatisticas = await service.getAllEstatisticas();

    return res.status(200).json({
        error: false,
        data: estatisticas,
    });
};

export const getEstatisticaById = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const estatistica = await service.getEstatisticaById(Number(id));

    return res.status(200).json({
        error: false,
        data: estatistica,
    });
};

export const updateEstatistica = async (req: any, res: Response<SuccessDTO>) => {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateEstatistica(Number(id), body);

    return res.status(200).json({
        error: false,
        message: 'Dados atualizados com sucesso!',
        data: result,
    });
};

export const deleteEstatistica = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const result = await service.deleteEstatistica(Number(id));

    return res.status(200).json({
        error: false,
        message: 'Dados removidos com sucesso!',
    });
};
