import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const service = new AuthService();

export const register = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        
        const user = await service.register(body);
        
        return res.status(201).json(user);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { body } = req;

        const result = await service.login(body);

        res.status(200).json(result);
    } catch(error: any) {
        res.status(401).json({ message: error.message });
    }
};
