import { Request, Response } from 'express';
import { EstatisticaService } from '../services/estatistica.service';

const service = new EstatisticaService();

export const createEstatistica = async (req: any, res: Response) => {
  try {
    const userId = req.userId;
    const { body } = req;

    const estatistica = await service.createEstatistica(body);

    return res.status(201).json(estatistica);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllEstatisticas = async (req: any, res: Response) => {
  try {
    const userId = req.userId;

    const estatistica = await service.getAllEstatisticas();

    return res.status(200).json(estatistica);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getEstatisticaById = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const estatistica = await service.getEstatisticaById(Number(id));

    return res.status(200).json(estatistica);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateEstatistica = async (req: any, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateEstatistica(Number(id), body);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteEstatistica = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const result = await service.deleteEstatistica(Number(id));

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
