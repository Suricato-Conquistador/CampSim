import { z } from 'zod';
import { Formato } from '../types/enums';

export const createCampeonatoSchema = z.object({
    nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres'),
    formato: z.nativeEnum(Formato),
    finalizado: z.boolean(),
    userId: z.number().gt(0, 'O userId deve ser um número maior que 0'),
});

export type CreateCampeonatoDTO = z.infer<typeof createCampeonatoSchema>;

export const updateCampeonatoSchema = z.object({
    nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres').optional(),
    formato: z.nativeEnum(Formato).optional(),
    finalizado: z.boolean().optional(),
});

export type UpdateCampeonatoDTO = z.infer<typeof updateCampeonatoSchema>;

export const queryCampeonatoSchema = z.object({
    page: z.string().transform(Number).default("1").pipe(z.number().min(1)),
    limit: z.string().transform(Number).default("20").pipe(z.number().min(1).max(100)),
    nome: z.string().optional(),
    formato: z.string().transform(v => v === "MATA_MATA" ? v = Formato.MATA_MATA : v = Formato.PONTOS_CORRIDOS).optional(),
    finalizado: z.string().transform(v => v === "true").optional(),
    userId: z.number(),
});

export type QueryCampeonatoDTO = z.infer<typeof queryCampeonatoSchema>;