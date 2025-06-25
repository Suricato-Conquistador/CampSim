import { prisma } from '../config/prisma';
import { RodadaDTO } from '../types/rodada';

export default class RodadaRepository {
  async createRodada(rodadaDTO: RodadaDTO) {
    return prisma.rodada.create({ data: rodadaDTO });
  }

  async getAllRodadas() {
    return prisma.rodada.findMany();
  }

  async getRodadaById(rodadaId: number) {
    return prisma.rodada.findUnique({ where: { id: rodadaId } });
  }

  async updateRodada(rodadaId: number, newRodada: RodadaDTO) {
    return prisma.rodada.update({ where: { id: rodadaId }, data: newRodada });
  }

  async deleteRodada(rodadaId: number) {
    return prisma.rodada.delete({ where: { id: rodadaId } });
  }
}
