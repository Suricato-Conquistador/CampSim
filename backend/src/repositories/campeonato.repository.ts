import { prisma } from "../config/prisma";
import { CampeonatoDTO } from "../types/campeonato";

export class CampeonatoRepository {
    async createCampeonato(campeonatoDTO: CampeonatoDTO) {
        return prisma.campeonato.create({ data: campeonatoDTO });
    }

    async findAllCampeonatos() {
        return prisma.campeonato.findMany();
    }

    async findCampeonatoById(campeonatoId: number) {
        return prisma.campeonato.findUnique({ where: { id: campeonatoId }});
    }

    async updateCampeonato(campeonatoId: number, newCampeonato: CampeonatoDTO) {
        return prisma.campeonato.update({ where: { id: campeonatoId }, data: newCampeonato });
    }

    async deleteCampeonato(campeonatoId: number) {
        return prisma.campeonato.delete({ where: { id: campeonatoId }});
    }
}
