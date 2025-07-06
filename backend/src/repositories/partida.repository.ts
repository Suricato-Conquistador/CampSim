import { prisma } from '../config/prisma';
import { CreatePartidaDTO, QueryPartidaDTO, UpdatePartidaDTO } from '../schemas/partida.schema';

export class PartidaRepository {
    async createPartida(partidaDTO: CreatePartidaDTO) {
        return prisma.partida.create({ data: partidaDTO });
    }

    async countPartidas(filter: any) {
        return prisma.partida.count({ where: filter });
    }

    async findAllPartidas(queryPartidaDTO: QueryPartidaDTO) {
        const { page, limit, clubeMandanteId, clubeVisitanteId, rodadaId } = queryPartidaDTO;

        const filter: any = {};

        if(clubeMandanteId) filter.clubeMandanteId = clubeMandanteId;

        if(clubeVisitanteId) filter.clubeVisitanteId = clubeVisitanteId;
        
        if(rodadaId) filter.rodadaId = rodadaId;

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

    async deletePartida(partidaId: number) {
        return prisma.partida.delete({ where: { id: partidaId } });
    }
}
