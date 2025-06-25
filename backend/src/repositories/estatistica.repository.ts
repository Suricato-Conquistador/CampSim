import { prisma } from '../config/prisma';
import { EstatisticaDTO } from '../types/estatistica';

export class EstatisticaRepository {
  async createEstatistica(estatisticaDTO: EstatisticaDTO) {
    return prisma.estatistica.create({ data: estatisticaDTO });
  }

  async findAllEstatisticas() {
    return prisma.estatistica.findMany();
  }

  async findEstatisticaById(estatisticaId: number) {
    return prisma.estatistica.findUnique({ where: { id: estatisticaId } });
  }

  async updateEstatistica(estatisticaId: number, newEstatistica: EstatisticaDTO) {
    return prisma.estatistica.update({ where: { id: estatisticaId }, data: newEstatistica });
  }

  async deleteEstatistica(estatisticaId: number) {
    return prisma.estatistica.delete({ where: { id: estatisticaId } });
  }
}
