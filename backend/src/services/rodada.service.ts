import RodadaRepository from '../repositories/rodada.repository';
import {
    CreateRodadaDTO,
    createRodadaSchema,
    UpdateRodadaDTO,
    updateRodadaSchema,
} from '../schemas/rodada.schema';
import { ApiError } from '../utils/apiError';

export default class RodadaService {
    private repository = new RodadaRepository();

    async createRodada(data: CreateRodadaDTO) {
        return this.repository.createRodada(data);
    }

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

        return result;
    }
}
