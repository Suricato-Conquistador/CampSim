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

export const queryClubeSchema = z.object({
    page: z.string().transform(Number).default("1").pipe(z.number().min(1)),
    limit: z.string().transform(Number).default("20").pipe(z.number().min(1).max(100)),
    nome: z.string().optional(),
});

export type QueryClubeDTO = z.infer<typeof queryClubeSchema>;
