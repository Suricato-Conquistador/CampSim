import { Request, Response, NextFunction } from 'express';
import { ErrorDTO } from '../types/error';

export function errorHandler(err: any, req: Request, res: Response<ErrorDTO>, next: NextFunction) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Erro no servidor';

  return res.status(statusCode).json({
    error: true,
    message,
    statusCode,
  });
}
