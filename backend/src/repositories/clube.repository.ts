import { prisma } from '../config/prisma';
import { ClubeDTO } from '../types/clube';

export class ClubeRepository {
  async createClube(clubeDTO: ClubeDTO) {
    return prisma.clube.create({ data: clubeDTO });
  }

  async findAllClubes() {
    return prisma.clube.findMany();
  }

  async findClubeById(clubeId: number) {
    return prisma.clube.findUnique({ where: { id: clubeId } });
  }

  async updateClube(clubeId: number, newClube: ClubeDTO) {
    return prisma.clube.update({ where: { id: clubeId }, data: newClube });
  }

  async deleteClube(clubeId: number) {
    return prisma.clube.delete({ where: { id: clubeId } });
  }
}
