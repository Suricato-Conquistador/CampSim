import { EstatisticaRepository } from '../repositories/estatistica.repository';
import {
    CreateEstatisticaDTO,
    UpdateEstatisticaDTO,
    QueryEstatisticaDTO,
} from '../schemas/estatistica.schema';
import { ApiError } from '../utils/apiError';

export class EstatisticaService {
    private repository = new EstatisticaRepository();

    async createEstatistica(data: CreateEstatisticaDTO) {
        return this.repository.createEstatistica(data);
    }

    async countEstatisticas(filter: any) {
        return this.repository.countEstatisticas(filter);
    }

    async getAllEstatisticas(queryEstatisticaDTO: QueryEstatisticaDTO) {
        return this.repository.findAllEstatisticas(queryEstatisticaDTO);
    }

    async getEstatisticaById(estatisticaId: number) {
        if (!estatisticaId) throw new ApiError('estatisticaId não fornecido', 400);

        const estatistica = await this.repository.findEstatisticaById(estatisticaId);

        if (!estatistica) throw new ApiError('Estatistica não encontrada', 404);

        return this.repository.findEstatisticaById(estatisticaId);
    }

    async updateEstatistica(estatisticaId: number, newEstatistica: UpdateEstatisticaDTO) {
        if (!estatisticaId) throw new ApiError('estatisticaId não fornecido', 400);

        const estatistica = await this.repository.findEstatisticaById(estatisticaId);

        if (!estatistica) throw new ApiError('Estatistica não encontrada', 404);

        const updatedEstatistica = await this.repository.updateEstatistica(
            estatisticaId,
            newEstatistica,
        );

        return updatedEstatistica;
    }

    async deleteEstatistica(estatisticaId: number) {
        if (!estatisticaId) throw new ApiError('estatisticaId não fornecido', 400);

        const estatistica = await this.repository.findEstatisticaById(estatisticaId);

        if (!estatistica) throw new ApiError('Estatistica não encontrada', 404);

        const result = await this.repository.deleteEstatistica(estatisticaId);

        if (!result) throw new ApiError('Erro ao remover estatistica');

        return result;
    }
}
