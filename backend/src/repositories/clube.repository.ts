import { prisma } from '../config/prisma';
import { CreateClubeDTO, UpdateClubeDTO } from '../schemas/clube.schema';

export class ClubeRepository {
    async createClube(clubeDTO: CreateClubeDTO) {
        return prisma.clube.create({ data: clubeDTO });
    }

    async findAllClubes() {
        return prisma.clube.findMany();
    }

    async findClubeById(clubeId: number) {
        return prisma.clube.findUnique({ where: { id: clubeId } });
    }

    async updateClube(clubeId: number, newClube: UpdateClubeDTO) {
        return prisma.clube.update({ where: { id: clubeId }, data: newClube });
    }

    async deleteClube(clubeId: number) {
        return prisma.clube.delete({ where: { id: clubeId } });
    }
}
