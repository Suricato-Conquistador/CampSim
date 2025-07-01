import { z } from 'zod';

export const createEstatisticaSchema = z.object({
    campeonatoId: z.number().gt(0, 'O id deve ser um número maior que 0'),
    clubeId: z.number().gt(0, 'O id deve ser um número maior que 0'),
});

export type CreateEstatisticaDTO = z.infer<typeof createEstatisticaSchema>;

export const updateEstatisticaSchema = z.object({
    pontos: z.number().gt(0, 'Os pontos devem ser maiores ou iguais a 0'),
    partidas: z.number().gt(0, 'As partidas devem ser maiores ou iguais a 0'),
    vitorias: z.number().gt(0, 'As vitorias devem ser maiores ou iguais a 0'),
    empates: z.number().gt(0, 'Os empates devem ser maiores ou iguais a 0'),
    derrotas: z.number().gt(0, 'As derrotas devem ser maiores ou iguais a 0'),
    golsPro: z.number().gt(0, 'Os golsPro devem ser maiores ou iguais a 0'),
    golsContra: z.number().gt(0, 'Os golsContra devem ser maiores ou iguais a 0'),
    saldo: z.number().gt(0, 'O saldo deve ser maior ou igual a 0'),
});

export type UpdateEstatisticaDTO = z.infer<typeof updateEstatisticaSchema>;
