import { prisma } from '../config/prisma';
<<<<<<< HEAD
import { CreateEstatisticaDTO, UpdateEstatisticaDTO } from '../schemas/estatistica.schema';
=======
import {
    CreateEstatisticaDTO,
    UpdateEstatisticaDTO,
    QueryEstatisticaDTO,
} from '../schemas/estatistica.schema';
import { parseOrderBy } from '../utils/parseOrder';
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543

export class EstatisticaRepository {
    async createEstatistica(estatisticaDTO: CreateEstatisticaDTO) {
        return prisma.estatistica.create({ data: estatisticaDTO });
    }

<<<<<<< HEAD
    async findAllEstatisticas() {
        return prisma.estatistica.findMany();
    }

    async findEstatisticaById(estatisticaId: number) {
        return prisma.estatistica.findUnique({ where: { id: estatisticaId } });
    }

    async updateEstatistica(estatisticaId: number, newEstatistica: UpdateEstatisticaDTO) {
        return prisma.estatistica.update({ where: { id: estatisticaId }, data: newEstatistica });
    }

=======
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

>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
    async deleteEstatistica(estatisticaId: number) {
        return prisma.estatistica.delete({ where: { id: estatisticaId } });
    }
}
