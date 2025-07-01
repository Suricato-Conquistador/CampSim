import { Request, Response } from 'express';
import { PartidaService } from '../services/partida.service';
import { SuccessDTO } from '../types/success';

const service = new PartidaService();

export const createPartida = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;
    const { body } = req;

    const partida = await service.createPartida(body);

    return res.status(201).json({
        error: false,
        message: 'Dados criados com sucesso!',
        data: partida,
    });
};

export const getAllPartidas = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;

    const partidas = await service.getAllPartidas();

    return res.status(200).json({
        error: false,
        data: partidas,
    });
};

export const getPartidaById = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req;

    const partida = await service.getPartidasById(Number(id));

    return res.status(200).json({
        error: false,
        data: partida,
    });
};

export const updatePartida = async (req: any, res: Response<SuccessDTO>) => {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updatePartida(Number(id), body);

    return res.status(200).json({
        error: false,
        message: 'Dados atualizados com sucesso!',
    });
};

export const deletePartida = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const result = await service.deletePartida(Number(id));

    return res.status(204).json({
        error: false,
        message: 'Dados removidos com sucesso!',
    });
};
