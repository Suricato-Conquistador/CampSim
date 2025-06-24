import { Request, Response } from "express"
import { CampeonatoService } from "../services/campeonato.service"

const service = new CampeonatoService();

export const createCampeonato = async (req: any, res: Response) => {
    try {
        const userId = req.userId;
        const { body } = req;
        const data = { ...body, userId }

        const campeonato = await service.createCampeonato(data);

        return res.status(201).json(campeonato);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const getAllCampeonatos = async (req: any, res: Response) => {
    try {
        const userId = req.userId;

        const campeonatos = await service.getAllCampeonatos();

        return res.status(200).json(campeonatos);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const getCampeonatoById = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const campeonato = await service.getCampeonatoById(Number(id));

        return res.status(200).json(campeonato);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const updateCampeonato = async (req: any, res: Response) => {
    try {
        const { body } = req;
        const { id } = req.params;

        const result = await service.updateCampeonato(Number(id), body);

        return res.status(200).json(result);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
}

export const deleteCampeonato = async (req: any, res: Response) => {
    try {
        const { id } = req.params;

        const result = await service.deleteCampeonato(Number(id));

        return res.status(200).json(result);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
}
