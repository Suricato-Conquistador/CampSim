import { prisma } from '../config/prisma';

import { CreateClubeDTO, QueryClubeDTO, UpdateClubeDTO } from '../schemas/clube.schema';

export class ClubeRepository {
    async createClube(clubeDTO: CreateClubeDTO) {
        return prisma.clube.create({ data: clubeDTO });
    }

    async countClubes(filter: any) {
        const { nome } = filter;

        if (nome) filter.nome = { contains: nome, mode: 'insensitive' };

        return prisma.clube.count({ where: filter });
    }

    async findAllClubes(queryClubeDTO: QueryClubeDTO) {
        const { page, limit, nome, orderBy, sort } = queryClubeDTO;

        const filter: any = {};

        if (nome) filter.nome = { contains: nome, mode: 'insensitive' };

        return prisma.clube.findMany({
            where: filter,
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                [orderBy]: sort,
            },
        });
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
