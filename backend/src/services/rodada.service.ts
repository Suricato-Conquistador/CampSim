import RodadaRepository from '../repositories/rodada.repository';
<<<<<<< HEAD
import {
    CreateRodadaDTO,
    createRodadaSchema,
    UpdateRodadaDTO,
    updateRodadaSchema,
} from '../schemas/rodada.schema';
=======
import { CreateRodadaDTO, QueryRodadaDTO, UpdateRodadaDTO } from '../schemas/rodada.schema';
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
import { ApiError } from '../utils/apiError';

export default class RodadaService {
    private repository = new RodadaRepository();

    async createRodada(data: CreateRodadaDTO) {
        return this.repository.createRodada(data);
    }

<<<<<<< HEAD
    async getAllRodadas() {
        return this.repository.getAllRodadas();
    }

    async getRodadaById(rodadaId: number) {
        if (!rodadaId) throw new ApiError('rodadaId não fornecido', 400);

        const rodada = await this.repository.getRodadaById(rodadaId);

        if (!rodada) throw new ApiError('Rodada não encontrada', 404);

        return rodada;
    }

    async updateRodada(rodadaId: number, newRodada: UpdateRodadaDTO) {
        if (!rodadaId) throw new ApiError('rodadaId não fornecido', 400);

        const rodada = await this.repository.getRodadaById(rodadaId);

        if (!rodada) throw new ApiError('Rodada não encontrada', 404);

        const updatedRodada = await this.repository.updateRodada(rodadaId, rodada);

        return updatedRodada;
    }

    async deleteRodada(rodadaId: number) {
        if (!rodadaId) throw new ApiError('rodadaId não fornecido', 400);

        const rodada = await this.repository.getRodadaById(rodadaId);

        if (!rodada) throw new ApiError('Rodada não encontrada', 404);

        const result = await this.repository.deleteRodada(rodadaId);

        if (!result) throw new ApiError('Erro ao remover rodada');

=======
    async countCampeonatos(filter: any) {
        return this.repository.countRodadas(filter);
    }

    async getAllRodadas(queryRodadaDTO: QueryRodadaDTO) {
        return this.repository.getAllRodadas(queryRodadaDTO);
    }

    async getRodadaById(rodadaId: number) {
        if (!rodadaId) throw new ApiError('rodadaId não fornecido', 400);

        const rodada = await this.repository.getRodadaById(rodadaId);

        if (!rodada) throw new ApiError('Rodada não encontrada', 404);

        return rodada;
    }

    async updateRodada(rodadaId: number, newRodada: UpdateRodadaDTO) {
        if (!rodadaId) throw new ApiError('rodadaId não fornecido', 400);

        const rodada = await this.repository.getRodadaById(rodadaId);

        if (!rodada) throw new ApiError('Rodada não encontrada', 404);

        const updatedRodada = await this.repository.updateRodada(rodadaId, rodada);

        return updatedRodada;
    }

    async deleteRodada(rodadaId: number) {
        if (!rodadaId) throw new ApiError('rodadaId não fornecido', 400);

        const rodada = await this.repository.getRodadaById(rodadaId);

        if (!rodada) throw new ApiError('Rodada não encontrada', 404);

        const result = await this.repository.deleteRodada(rodadaId);

        if (!result) throw new ApiError('Erro ao remover rodada');

>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
        return result;
    }
}
