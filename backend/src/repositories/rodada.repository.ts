import { prisma } from '../config/prisma';
import { CreateRodadaDTO, UpdateRodadaDTO } from '../schemas/rodada.schema';

export default class RodadaRepository {
  async createRodada(rodadaDTO: CreateRodadaDTO) {
    return prisma.rodada.create({ data: rodadaDTO });
  }

  async getAllRodadas() {
    return prisma.rodada.findMany();
  }

  async getRodadaById(rodadaId: number) {
    return prisma.rodada.findUnique({ where: { id: rodadaId } });
  }

  async updateRodada(rodadaId: number, newRodada: UpdateRodadaDTO) {
    return prisma.rodada.update({ where: { id: rodadaId }, data: newRodada });
  }

  async deleteRodada(rodadaId: number) {
    return prisma.rodada.delete({ where: { id: rodadaId } });
  }
}
