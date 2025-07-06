import { PartidaRepository } from '../repositories/partida.repository';
import {
    CreatePartidaDTO,
    QueryPartidaDTO,
    UpdatePartidaDTO,
} from '../schemas/partida.schema';
import { ApiError } from '../utils/apiError';

export class PartidaService {
    private repository = new PartidaRepository();

    async createPartida(data: CreatePartidaDTO) {
        return this.repository.createPartida(data);
    }

    async countPartidas(filter: any) {
        return this.repository.countPartidas(filter);
    }

    async getAllPartidas(queryPartidaDTO: QueryPartidaDTO) {
        return this.repository.findAllPartidas(queryPartidaDTO);
    }

    async getPartidasById(partidaId: number) {
        if (!partidaId) throw new ApiError('partidaId não fornecido', 400);

        const partida = await this.repository.findPartidaById(partidaId);

        if (!partida) throw new ApiError('Partida não encontrado', 404);

        return partida;
    }

    async updatePartida(partidaId: number, newPartida: UpdatePartidaDTO) {
        if (!partidaId) throw new ApiError('partidaId não fornecido', 400);

        const partida = await this.repository.findPartidaById(partidaId);

        if (!partida) throw new ApiError('Partida não encontrado', 404);

        const updatedPartida = await this.repository.updatePartida(partidaId, partida);

        return updatedPartida;
    }

    async deletePartida(partidaId: number) {
        if (!partidaId) throw new ApiError('partidaId não fornecido', 400);

        const partida = await this.repository.findPartidaById(partidaId);

        if (!partida) throw new ApiError('Partida não encontrado', 404);

        const result = await this.repository.deletePartida(partidaId);

        if (!result) throw new ApiError('Erro ao remover partida');

        return result;
    }
}
