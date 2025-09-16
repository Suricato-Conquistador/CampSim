import RodadaRepository from '../repositories/rodada.repository';
import { CreateRodadaDTO, QueryRodadaDTO, UpdateRodadaDTO } from '../schemas/rodada.schema';

import { ApiError } from '../utils/apiError';

export default class RodadaService {
    private repository = new RodadaRepository();

    async createRodada(data: CreateRodadaDTO) {
        return this.repository.createRodada(data);
    }

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

        return result;
    }
}
