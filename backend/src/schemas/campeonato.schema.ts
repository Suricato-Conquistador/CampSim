import { z } from 'zod';
import { Formato } from '../types/enums';

export const createCampeonatoSchema = z.object({
    nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres'),
    formato: z.nativeEnum(Formato),
    finalizado: z.boolean(),
});

export type CreateCampeonatoDTO = z.infer<typeof createCampeonatoSchema>;

export const updateCampeonatoSchema = z.object({
    nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres').optional(),
    formato: z.nativeEnum(Formato).optional(),
    finalizado: z.boolean().optional(),
});

export type UpdateCampeonatoDTO = z.infer<typeof updateCampeonatoSchema>;
