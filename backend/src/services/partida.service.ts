import { PartidaRepository } from '../repositories/partida.repository';
import {
    CreatePartidaDTO,
    createPartidaSchema,
    UpdatePartidaDTO,
    updatePartidaSchema,
} from '../schemas/partida.schema';
import { ApiError } from '../utils/apiError';

export class PartidaService {
    private repository = new PartidaRepository();

    async createPartida(data: CreatePartidaDTO) {
        const parsed = createPartidaSchema.safeParse(data);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        return this.repository.createPartida(data);
    }

    async getAllPartidas() {
        return this.repository.findAllPartidas();
    }

    async getPartidasById(partidaId: number) {
        if (!partidaId) throw new ApiError('partidaId não fornecido', 400);

        const partida = await this.repository.findPartidaById(partidaId);

        if (!partida) throw new ApiError('Partida não encontrado', 404);

        return partida;
    }

    async updatePartida(partidaId: number, newPartida: UpdatePartidaDTO) {
        const parsed = updatePartidaSchema.safeParse(newPartida);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        if (!partidaId) throw new ApiError('partidaId não fornecido', 400);

        const partida = await this.repository.findPartidaById(partidaId);

        if (!partida) throw new ApiError('Partida não encontrado', 404);

        if (newPartida.golsMandante) partida.golsMandante = newPartida.golsMandante;

        if (newPartida.golsVisitante) partida.golsVisitante = newPartida.golsVisitante;

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
