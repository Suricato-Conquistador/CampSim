import { Request, Response } from 'express';
import { PartidaService } from '../services/partida.service';

const service = new PartidaService();

export const createPartida = async (req: any, res: Response) => {
  try {
    const userId = req.userId;
    const { body } = req;

    const partida = await service.createPartida(body);

    return res.status(201).json(partida);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllPartidas = async (req: any, res: Response) => {
  try {
    const userId = req.userId;

    const partidas = await service.getAllPartidas();

    return res.status(200).json(partidas);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getPartidaById = async (req: any, res: Response) => {
  try {
    const { id } = req;

    const partida = await service.getPartidasById(Number(id));

    return res.status(200).json(partida);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const updatePartida = async (req: any, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const result = await service.updatePartida(Number(id), body);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const deletePartida = async (req: any, res: Response) => {
  try {
    const { id } = req.params;

    const result = await service.deletePartida(Number(id));

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
