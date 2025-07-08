import { Request, Response } from 'express';
import { ClubeService } from '../services/clube.service';
import { SuccessDTO } from '../types/success';
import { queryClubeSchema } from '../schemas/clube.schema';

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
<<<<<<< HEAD

    const clubes = await service.getAllClubes();

    return res.status(200).json({
        error: false,
        data: clubes,
=======
    const { query } = req;
    const parsedQuery = queryClubeSchema.parse(query);

    const { page, limit, orderBy, sort, ...countQuery } = parsedQuery;

    const total = await service.countClubes(countQuery);

    const clubes = await service.getAllClubes(parsedQuery);

    return res.status(200).json({
        error: false,
        data: {
            meta: {
                page: page,
                limit: limit,
                total: total,
                totalPages: Math.ceil(total / limit),
                orderBy: orderBy,
                sort: sort,
            },
            clubes,
        },
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
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
