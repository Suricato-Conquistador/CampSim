import { prisma } from '../config/prisma';
<<<<<<< HEAD
import { CreateCampeonatoDTO, UpdateCampeonatoDTO } from '../schemas/campeonato.schema';
=======
import {
    CreateCampeonatoDTO,
    UpdateCampeonatoDTO,
    QueryCampeonatoDTO,
} from '../schemas/campeonato.schema';
import { parseOrderBy } from '../utils/parseOrder';
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543

export class CampeonatoRepository {
    async createCampeonato(campeonatoDTO: CreateCampeonatoDTO) {
        return prisma.campeonato.create({ data: campeonatoDTO });
    }

<<<<<<< HEAD
    async findAllCampeonatos() {
        return prisma.campeonato.findMany();
    }

    async findCampeonatoById(campeonatoId: number) {
        return prisma.campeonato.findUnique({ where: { id: campeonatoId } });
    }

    async updateCampeonato(campeonatoId: number, newCampeonato: UpdateCampeonatoDTO) {
        return prisma.campeonato.update({ where: { id: campeonatoId }, data: newCampeonato });
    }

=======
    async countCampeonatos(filter: any) {
        const { nome } = filter;

        if (nome) filter.nome = { contains: nome, mode: 'insensitive' };

        return prisma.campeonato.count({ where: filter });
    }

    async findAllCampeonatos(queryCampeonatoDTO: QueryCampeonatoDTO) {
        const { page, limit, nome, formato, finalizado, orderBy } = queryCampeonatoDTO;

        const filter: any = {};

        filter.userId = queryCampeonatoDTO.userId;

        if (nome) filter.nome = { contains: nome, mode: 'insensitive' };

        if (formato) filter.formato = formato;

        if (finalizado !== undefined) filter.finalizado = finalizado;

        return prisma.campeonato.findMany({
            where: filter,
            skip: (page - 1) * limit,
            take: limit,
            orderBy: parseOrderBy(orderBy),
        });
    }

    async findCampeonatoById(campeonatoId: number) {
        return prisma.campeonato.findUnique({ where: { id: campeonatoId } });
    }

    async updateCampeonato(campeonatoId: number, newCampeonato: UpdateCampeonatoDTO) {
        return prisma.campeonato.update({ where: { id: campeonatoId }, data: newCampeonato });
    }

>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
    async deleteCampeonato(campeonatoId: number) {
        return prisma.campeonato.delete({ where: { id: campeonatoId } });
    }
}
