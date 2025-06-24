import { Request, Response } from 'express';
import { ClubeService } from '../services/clube.service';

const service = new ClubeService();

export const createClube = async (req: any, res: Response) => {
  try {
    const userId = req.userId;
    const { body } = req;

    const clube = await service.createClube(body);

    return res.status(201).json(clube);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllClubes = async (req: any, res: Response) => {
  try {
    const userId = req.userId;

    const clubes = await service.getAllClubes();

    return res.status(200).json(clubes);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getClubeById = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const clube = await service.getClubeById(Number(id));

    return res.status(200).json(clube);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateClube = async (req: any, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updateClube(Number(id), body);

    return res.status(200).json(result);
  } catch (error: any) {
    return req.status(400).json({ message: error.message });
  }
};

export const deleteClube = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const result = await service.deleteClube(Number(id));

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
