import { z } from 'zod';

export const createPartidaSchema = z.object({
    golsMandante: z.number().gte(0, 'Os gols devem ser maiores ou iguais a 0'),
    golsVisitante: z.number().gte(0, 'Os gols devem ser maiores ou iguais a 0'),
    clubeMandanteId: z.number().gt(0, 'O id deve ser um número maior que 0'),
    clubeVisitanteId: z.number().gt(0, 'O id deve ser um número maior que 0'),
    rodadaId: z.number().gt(0, 'O id deve ser um número maior que 0'),
});

export type CreatePartidaDTO = z.infer<typeof createPartidaSchema>;

export const updatePartidaSchema = z.object({
    golsMandante: z.number().gte(0, 'Os gols devem ser maiores ou iguais a 0'),
    golsVisitante: z.number().gte(0, 'Os gols devem ser maiores ou iguais a 0'),
});

export type UpdatePartidaDTO = z.infer<typeof updatePartidaSchema>;
