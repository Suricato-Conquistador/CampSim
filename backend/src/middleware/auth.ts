import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config";

export interface AuthRequest extends Request {
    userId?: number;
}

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET); 
        req.userId = Number(payload.sub);
        next();
    } catch(error) {
        return res.status(403).json({ message: 'Token inválido' });
    }
}
