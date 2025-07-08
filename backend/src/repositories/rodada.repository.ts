import { prisma } from '../config/prisma';
<<<<<<< HEAD
import { CreateRodadaDTO, UpdateRodadaDTO } from '../schemas/rodada.schema';
=======
import { CreateRodadaDTO, QueryRodadaDTO, UpdateRodadaDTO } from '../schemas/rodada.schema';
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543

export default class RodadaRepository {
    async createRodada(rodadaDTO: CreateRodadaDTO) {
        return prisma.rodada.create({ data: rodadaDTO });
    }

<<<<<<< HEAD
    async getAllRodadas() {
        return prisma.rodada.findMany();
    }

    async getRodadaById(rodadaId: number) {
        return prisma.rodada.findUnique({ where: { id: rodadaId } });
    }

    async updateRodada(rodadaId: number, newRodada: UpdateRodadaDTO) {
        return prisma.rodada.update({ where: { id: rodadaId }, data: newRodada });
    }

=======
    async countRodadas(filter: any) {
        return prisma.rodada.count({ where: filter });
    }

    async getAllRodadas(queryRodadaDTO: QueryRodadaDTO) {
        const { page, limit, numero, campeonatoId, orderBy, sort } = queryRodadaDTO;

        const filter: any = {};

        if (numero) filter.numero = numero;

        if (campeonatoId) filter.campeonatoId = campeonatoId;

        return prisma.rodada.findMany({
            where: filter,
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                [orderBy]: sort,
            },
        });
    }

    async getRodadaById(rodadaId: number) {
        return prisma.rodada.findUnique({ where: { id: rodadaId } });
    }

    async updateRodada(rodadaId: number, newRodada: UpdateRodadaDTO) {
        return prisma.rodada.update({ where: { id: rodadaId }, data: newRodada });
    }

>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
    async deleteRodada(rodadaId: number) {
        return prisma.rodada.delete({ where: { id: rodadaId } });
    }
}
