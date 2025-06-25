import { prisma } from '../config/prisma';
import { PartidaDTO } from '../types/partida';

export class PartidaRepository {
  async createPartida(partidaDTO: PartidaDTO) {
    return prisma.partida.create({ data: partidaDTO });
  }

  async findAllPartidas() {
    return prisma.partida.findMany();
  }

  async findPartidaById(partidaId: number) {
    return prisma.partida.findUnique({ where: { id: partidaId } });
  }

  async updatePartida(partidaId: number, newPartida: PartidaDTO) {
    return prisma.partida.update({ where: { id: partidaId }, data: newPartida });
  }

  async deletePartida(partidaId: number) {
    return prisma.partida.delete({ where: { id: partidaId } });
  }
}
