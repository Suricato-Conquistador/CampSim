import { prisma } from '../config/prisma';
<<<<<<< HEAD
import { CreatePartidaDTO, UpdatePartidaDTO } from '../schemas/partida.schema';
=======
import { CreatePartidaDTO, QueryPartidaDTO, UpdatePartidaDTO } from '../schemas/partida.schema';
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543

export class PartidaRepository {
    async createPartida(partidaDTO: CreatePartidaDTO) {
        return prisma.partida.create({ data: partidaDTO });
    }

<<<<<<< HEAD
    async findAllPartidas() {
        return prisma.partida.findMany();
    }

    async findPartidaById(partidaId: number) {
        return prisma.partida.findUnique({ where: { id: partidaId } });
    }

    async updatePartida(partidaId: number, newPartida: UpdatePartidaDTO) {
        return prisma.partida.update({ where: { id: partidaId }, data: newPartida });
    }

=======
    async countPartidas(filter: any) {
        return prisma.partida.count({ where: filter });
    }

    async findAllPartidas(queryPartidaDTO: QueryPartidaDTO) {
        const { page, limit, clubeMandanteId, clubeVisitanteId, rodadaId } = queryPartidaDTO;

        const filter: any = {};

        if (clubeMandanteId) filter.clubeMandanteId = clubeMandanteId;

        if (clubeVisitanteId) filter.clubeVisitanteId = clubeVisitanteId;

        if (rodadaId) filter.rodadaId = rodadaId;

        return prisma.partida.findMany({
            where: filter,
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    async findPartidaById(partidaId: number) {
        return prisma.partida.findUnique({ where: { id: partidaId } });
    }

    async updatePartida(partidaId: number, newPartida: UpdatePartidaDTO) {
        return prisma.partida.update({ where: { id: partidaId }, data: newPartida });
    }

>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
    async deletePartida(partidaId: number) {
        return prisma.partida.delete({ where: { id: partidaId } });
    }
}
