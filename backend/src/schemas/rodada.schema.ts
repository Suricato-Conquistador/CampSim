import { z } from 'zod';

export const createRodadaSchema = z.object({
    numero: z.number().gt(0, 'O número da rodada deve ser maior que 0'),
    campeonatoId: z.number().gt(0, 'O id deve ser um número maior que 0'),
});

export type CreateRodadaDTO = z.infer<typeof createRodadaSchema>;

export const updateRodadaSchema = z.object({
    numero: z.number().gt(0, 'O número da rodada deve ser maior que 0'),
});

export type UpdateRodadaDTO = z.infer<typeof updateRodadaSchema>;
<<<<<<< HEAD
=======

export const queryRodadaSchema = z.object({
    page: z.string().transform(Number).default('1').pipe(z.number().min(1)),
    limit: z.string().transform(Number).default('20').pipe(z.number().min(1).max(100)),
    numero: z.string().transform(Number).pipe(z.number().min(1)).optional(),
    campeonatoId: z.string().transform(Number).pipe(z.number().min(1)).optional(),
    orderBy: z.enum(['numero']).optional().default('numero'),
    sort: z.enum(['asc', 'desc']).optional().default('asc'),
});

export type QueryRodadaDTO = z.infer<typeof queryRodadaSchema>;
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
