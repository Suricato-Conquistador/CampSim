import { z } from 'zod';

export const createEstatisticaSchema = z.object({
    campeonatoId: z.number().gt(0, 'O id deve ser um número maior que 0'),
    clubeId: z.number().gt(0, 'O id deve ser um número maior que 0'),
});

export type CreateEstatisticaDTO = z.infer<typeof createEstatisticaSchema>;

export const updateEstatisticaSchema = z.object({
    pontos: z.number().gt(0, 'Os pontos devem ser maiores ou iguais a 0').optional(),
    partidas: z.number().gt(0, 'As partidas devem ser maiores ou iguais a 0').optional(),
    vitorias: z.number().gt(0, 'As vitorias devem ser maiores ou iguais a 0').optional(),
    empates: z.number().gt(0, 'Os empates devem ser maiores ou iguais a 0').optional(),
    derrotas: z.number().gt(0, 'As derrotas devem ser maiores ou iguais a 0').optional(),
    golsPro: z.number().gt(0, 'Os golsPro devem ser maiores ou iguais a 0').optional(),
    golsContra: z.number().gt(0, 'Os golsContra devem ser maiores ou iguais a 0').optional(),
    saldo: z.number().gt(0, 'O saldo deve ser maior ou igual a 0').optional(),
});

export type UpdateEstatisticaDTO = z.infer<typeof updateEstatisticaSchema>;
<<<<<<< HEAD
=======

export const queryEstatisticaSchema = z.object({
    page: z.string().transform(Number).default('1').pipe(z.number().min(1)),
    limit: z.string().transform(Number).default('20').pipe(z.number().min(1).max(100)),
    campeonatoId: z.string().transform(Number).pipe(z.number().min(1)).optional(),
    clubeId: z.string().transform(Number).pipe(z.number().min(1)).optional(),
    orderBy: z
        .string()
        .optional()
        .default('pontos:desc,vitorias:desc,saldo:desc,golsPro:desc,partidas:asc')
        .refine((v) => {
            return v.split(',').every((item) => {
                const [field, dir] = item.split(':');

                return (
                    ['asc', 'desc'].includes(dir) &&
                    [
                        'pontos',
                        'partidas',
                        'vitorias',
                        'empates',
                        'derrotas',
                        'golsPro',
                        'golsContra',
                        'saldo',
                    ].includes(field)
                );
            });
        }),
});

export type QueryEstatisticaDTO = z.infer<typeof queryEstatisticaSchema>;
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
