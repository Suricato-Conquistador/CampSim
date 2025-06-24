import { Request, Response } from 'express';
import RodadaService from '../services/rodada.service';

const service = new RodadaService();

export const createRodada = async (req: any, res: Response) => {
  try {
    const userId = req.userId;
    const { body } = req;

    const rodada = await service.createRodada(body);

    return res.status(201).json(rodada);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllRodadas = async (req: any, res: Response) => {
  try {
    const userId = req.userId;

    const rodadas = await service.getAllRodadas();

    return res.status(200).json(rodadas);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getRodadaById = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const rodada = await service.getRodadaById(Number(id));

    return res.status(200).json(rodada);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateRodada = async (req: any, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateRodada(Number(id), body);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteRodada = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const result = await service.deleteRodada(Number(id));

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
