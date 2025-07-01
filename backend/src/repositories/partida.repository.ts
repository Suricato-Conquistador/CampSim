import { prisma } from '../config/prisma';
import { CreatePartidaDTO, UpdatePartidaDTO } from '../schemas/partida.schema';

export class PartidaRepository {
  async createPartida(partidaDTO: CreatePartidaDTO) {
    return prisma.partida.create({ data: partidaDTO });
  }

  async findAllPartidas() {
    return prisma.partida.findMany();
  }

  async findPartidaById(partidaId: number) {
    return prisma.partida.findUnique({ where: { id: partidaId } });
  }

  async updatePartida(partidaId: number, newPartida: UpdatePartidaDTO) {
    return prisma.partida.update({ where: { id: partidaId }, data: newPartida });
  }

  async deletePartida(partidaId: number) {
    return prisma.partida.delete({ where: { id: partidaId } });
  }
}
