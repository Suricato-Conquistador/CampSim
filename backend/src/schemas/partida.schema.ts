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
    golsMandante: z.number().gte(0, 'Os gols devem ser maiores ou iguais a 0').optional(),
    golsVisitante: z.number().gte(0, 'Os gols devem ser maiores ou iguais a 0').optional(),
});

export type UpdatePartidaDTO = z.infer<typeof updatePartidaSchema>;
<<<<<<< HEAD
=======

export const queryPartidaSchema = z.object({
    page: z.string().transform(Number).default('1').pipe(z.number().min(1)),
    limit: z.string().transform(Number).default('20').pipe(z.number().min(1).max(100)),
    clubeMandanteId: z.string().transform(Number).pipe(z.number().min(1)).optional(),
    clubeVisitanteId: z.string().transform(Number).pipe(z.number().min(1)).optional(),
    rodadaId: z.string().transform(Number).pipe(z.number().min(1)).optional(),
});

export type QueryPartidaDTO = z.infer<typeof queryPartidaSchema>;
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
