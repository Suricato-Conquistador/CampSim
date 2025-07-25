import { z } from 'zod';

export const createClubeSchema = z.object({
    nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres'),
    imagem: z.string().url('A imagem deve ser uma URL'),
});

export type CreateClubeDTO = z.infer<typeof createClubeSchema>;

export const updateClubeSchema = z.object({
    imagem: z.string().url('O nome deve ser uma URL').optional(),
});

export type UpdateClubeDTO = z.infer<typeof updateClubeSchema>;
<<<<<<< HEAD
=======

export const queryClubeSchema = z.object({
    page: z.string().transform(Number).default('1').pipe(z.number().min(1)),
    limit: z.string().transform(Number).default('20').pipe(z.number().min(1).max(100)),
    nome: z.string().optional(),
    orderBy: z.enum(['nome']).optional().default('nome'),
    sort: z.enum(['asc', 'desc']).optional().default('asc'),
});

export type QueryClubeDTO = z.infer<typeof queryClubeSchema>;
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
