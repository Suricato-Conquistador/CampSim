import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth";
import { AuthService } from "../services/auth.service";

const service = new AuthService();

export const register = async (req: Request, res: Response) => {
    try {
        const user = await service.register(req.body);
        
        return res.status(201).json(user);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const loginDTO = req.body;

        const result = await service.login(loginDTO);

        res.status(200).json(result);
    } catch(error: any) {
        res.status(401).json({ message: error.message });
    }
};
