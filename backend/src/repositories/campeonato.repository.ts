import { prisma } from '../config/prisma';
import { CreateCampeonatoDTO, UpdateCampeonatoDTO, QueryCampeonatoDTO } from '../schemas/campeonato.schema';

export class CampeonatoRepository {
    async createCampeonato(campeonatoDTO: CreateCampeonatoDTO) {
        return prisma.campeonato.create({ data: campeonatoDTO });
    }

    async countCampeonatos(filter: any) {
        const { nome } = filter;

        if(nome) filter.nome = { contains: nome, mode: "insensitive"};

        return prisma.campeonato.count({ where: filter });
    }

    async findAllCampeonatos(queryCampeonatoDTO: QueryCampeonatoDTO) {
        const { page, limit, nome, formato, finalizado } = queryCampeonatoDTO;
        
        const filter: any = {};

        filter.userId = queryCampeonatoDTO.userId;

        if(nome) filter.nome = { contains: nome, mode: "insensitive"};

        if(formato) filter.formato = formato;
        
        if(finalizado !== undefined) filter.finalizado = finalizado;

        return prisma.campeonato.findMany({
            where: filter,
            skip: (page - 1) * limit,
            take: limit
        });
    }

    async findCampeonatoById(campeonatoId: number) {
        return prisma.campeonato.findUnique({ where: { id: campeonatoId } });
    }

    async updateCampeonato(campeonatoId: number, newCampeonato: UpdateCampeonatoDTO) {
        return prisma.campeonato.update({ where: { id: campeonatoId }, data: newCampeonato });
    }

    async deleteCampeonato(campeonatoId: number) {
        return prisma.campeonato.delete({ where: { id: campeonatoId } });
    }
}
