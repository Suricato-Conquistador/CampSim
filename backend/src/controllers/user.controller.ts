import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const service = new UserService();

export async function viewOwner(req: any, res: Response) {
    try {
        const userId = req.userId;

        const user = await service.getOwner(userId);

        return res.status(201).json(user);
    } catch(error: any) {
        return res.status(400).json({ message: error.message });
    }
}
