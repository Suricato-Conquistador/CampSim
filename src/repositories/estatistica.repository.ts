import { prisma } from '../config/prisma';

import {
    CreateEstatisticaDTO,
    UpdateEstatisticaDTO,
    QueryEstatisticaDTO,
} from '../schemas/estatistica.schema';
import { parseOrderBy } from '../utils/parseOrder';

export class EstatisticaRepository {
    async createEstatistica(estatisticaDTO: CreateEstatisticaDTO) {
        return prisma.estatistica.create({ data: estatisticaDTO });
    }

    async countEstatisticas(filter: any) {
        return prisma.estatistica.count({ where: filter });
    }

    async findAllEstatisticas(queryEstatisticaDTO: QueryEstatisticaDTO) {
        const { page, limit, campeonatoId, clubeId, orderBy } = queryEstatisticaDTO;

        const filter: any = {};

        if (campeonatoId) filter.campeonatoId = campeonatoId;

        if (clubeId) filter.clubeId = clubeId;

        return prisma.estatistica.findMany({
            where: filter,
            skip: (page - 1) * limit,
            take: limit,
            orderBy: parseOrderBy(orderBy),
        });
    }

    async findEstatisticaById(estatisticaId: number) {
        return prisma.estatistica.findUnique({ where: { id: estatisticaId } });
    }

    async updateEstatistica(estatisticaId: number, newEstatistica: UpdateEstatisticaDTO) {
        return prisma.estatistica.update({ where: { id: estatisticaId }, data: newEstatistica });
    }

    async deleteEstatistica(estatisticaId: number) {
        return prisma.estatistica.delete({ where: { id: estatisticaId } });
    }
}
