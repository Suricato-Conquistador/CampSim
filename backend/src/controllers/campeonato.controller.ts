import { Request, Response } from 'express';
import { CampeonatoService } from '../services/campeonato.service';
import { SuccessDTO } from '../types/success';
import { queryCampeonatoSchema } from '../schemas/campeonato.schema';

const service = new CampeonatoService();

export const createCampeonato = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;
    const { body } = req;
    const data = { ...body, userId };

    const campeonato = await service.createCampeonato(data);

    return res.status(201).json({
        error: false,
        message: 'Dados criados com sucesso!',
        data: campeonato,
    });
};

export const getAllCampeonatos = async (req: any, res: Response<SuccessDTO>) => {
    const userId = req.userId;
    const { query } = req;
    const queryWithUserId = { ...query, userId };
    const parsedQuery = queryCampeonatoSchema.parse(queryWithUserId);

    const {  page, limit, ...countQuery } = parsedQuery;

    const total = await service.countCampeonatos(countQuery);

    const campeonatos = await service.getAllCampeonatos(parsedQuery);

    return res.status(200).json({
        error: false,
        data: {
            meta: {
            page: page,
            limit: limit,
            total: total,
            totalPages: Math.ceil(total / limit),
            campeonatos,
        }},
    });
};

export const getCampeonatoById = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const campeonato = await service.getCampeonatoById(Number(id));

    return res.status(200).json({
        error: false,
        data: campeonato,
    });
};

export const updateCampeonato = async (req: any, res: Response<SuccessDTO>) => {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateCampeonato(Number(id), body);

    return res.status(200).json({
        error: false,
        message: 'Dados atualizados com sucesso!',
        data: result,
    });
};

export const deleteCampeonato = async (req: any, res: Response<SuccessDTO>) => {
    const { id } = req.params;

    const result = await service.deleteCampeonato(Number(id));

    return res.status(204).json({
        error: false,
        message: 'Dados removidos com sucesso!',
    });
};
