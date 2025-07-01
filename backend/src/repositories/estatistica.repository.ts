import { prisma } from '../config/prisma';
import { CreateEstatisticaDTO, UpdateEstatisticaDTO } from '../schemas/estatistica.schema';

export class EstatisticaRepository {
    async createEstatistica(estatisticaDTO: CreateEstatisticaDTO) {
        return prisma.estatistica.create({ data: estatisticaDTO });
    }

    async findAllEstatisticas() {
        return prisma.estatistica.findMany();
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
