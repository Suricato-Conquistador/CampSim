import { CampeonatoRepository } from '../repositories/campeonato.repository';
<<<<<<< HEAD
import { CreateCampeonatoDTO, UpdateCampeonatoDTO } from '../schemas/campeonato.schema';
=======
import {
    CreateCampeonatoDTO,
    UpdateCampeonatoDTO,
    QueryCampeonatoDTO,
} from '../schemas/campeonato.schema';
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
import { ApiError } from '../utils/apiError';

export class CampeonatoService {
    private repository = new CampeonatoRepository();

    async createCampeonato(data: CreateCampeonatoDTO) {
        return this.repository.createCampeonato(data);
    }

<<<<<<< HEAD
    async getAllCampeonatos() {
        return this.repository.findAllCampeonatos();
    }

    async getCampeonatoById(campeonatoId: number) {
        if (!campeonatoId) throw new ApiError('campeonatoId não fornecido', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        return campeonato;
    }

    async updateCampeonato(campeonatoId: number, newCampeonato: UpdateCampeonatoDTO) {
        if (!campeonatoId) throw new ApiError('campeonatoId não fornecido', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        const updatedCampeonato = await this.repository.updateCampeonato(campeonatoId, newCampeonato);

        return updatedCampeonato;
    }

    async deleteCampeonato(campeonatoId: number) {
        if (!campeonatoId) throw new ApiError('campeonatoId não encontrado', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        const result = await this.repository.deleteCampeonato(campeonatoId);

        if (!result) throw new ApiError('Erro ao remover campeonato');

=======
    async countCampeonatos(filter: any) {
        return this.repository.countCampeonatos(filter);
    }

    async getAllCampeonatos(queryCampeonatoDTO: QueryCampeonatoDTO) {
        return this.repository.findAllCampeonatos(queryCampeonatoDTO);
    }

    async getCampeonatoById(campeonatoId: number) {
        if (!campeonatoId) throw new ApiError('campeonatoId não fornecido', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        return campeonato;
    }

    async updateCampeonato(campeonatoId: number, newCampeonato: UpdateCampeonatoDTO) {
        if (!campeonatoId) throw new ApiError('campeonatoId não fornecido', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        const updatedCampeonato = await this.repository.updateCampeonato(
            campeonatoId,
            newCampeonato,
        );

        return updatedCampeonato;
    }

    async deleteCampeonato(campeonatoId: number) {
        if (!campeonatoId) throw new ApiError('campeonatoId não encontrado', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        const result = await this.repository.deleteCampeonato(campeonatoId);

        if (!result) throw new ApiError('Erro ao remover campeonato');

>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
        return result;
    }
}
