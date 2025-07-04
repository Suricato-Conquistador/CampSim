import { Request, Response } from 'express';
import RodadaService from '../services/rodada.service';
import { SuccessDTO } from '../types/success';

const service = new RodadaService();

export const createRodada = async (req: any, res: Response<SuccessDTO>) => {
  const userId = req.userId;
  const { body } = req;

  const rodada = await service.createRodada(body);

  return res.status(201).json({
    error: false,
    message: 'Dados criados com sucesso!',
    data: rodada,
  });
};

export const getAllRodadas = async (req: any, res: Response<SuccessDTO>) => {
  const userId = req.userId;

  const rodadas = await service.getAllRodadas();

  return res.status(200).json({
    error: false,
    data: rodadas,
  });
};

export const getRodadaById = async (req: any, res: Response<SuccessDTO>) => {
  const { id } = req.params;

  const rodada = await service.getRodadaById(Number(id));

  return res.status(200).json({
    error: false,
    data: rodada,
  });
};

export const updateRodada = async (req: any, res: Response<SuccessDTO>) => {
  const { body } = req;
  const { id } = req.params;

  const result = await service.updateRodada(Number(id), body);

  return res.status(200).json({
    error: false,
    message: 'Dados atualizados com sucesso!',
    data: result,
  });
};

export const deleteRodada = async (req: any, res: Response<SuccessDTO>) => {
  const { id } = req.params;

  const result = await service.deleteRodada(Number(id));

  return res.status(204).json({
    error: false,
    message: 'Dados removidos com sucesso!',
  });
};
