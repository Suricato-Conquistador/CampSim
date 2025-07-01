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
