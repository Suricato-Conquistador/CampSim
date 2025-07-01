import { ClubeRepository } from '../repositories/clube.repository';
import {
    CreateClubeDTO,
    createClubeSchema,
    UpdateClubeDTO,
    updateClubeSchema,
} from '../schemas/clube.schema';
import { ApiError } from '../utils/apiError';

export class ClubeService {
    private repository = new ClubeRepository();

    async createClube(data: CreateClubeDTO) {
        const parsed = createClubeSchema.safeParse(data);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        return this.repository.createClube(data);
    }

    async getAllClubes() {
        return this.repository.findAllClubes();
    }

    async getClubeById(clubeId: number) {
        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        return clube;
    }

    async updateClube(clubeId: number, newClube: UpdateClubeDTO) {
        const parsed = updateClubeSchema.safeParse(newClube);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        if (newClube.imagem) clube.imagem = newClube.imagem;

        const updatedClube = await this.repository.updateClube(clubeId, clube);

        return updatedClube;
    }

    async deleteClube(clubeId: number) {
        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        const result = await this.repository.deleteClube(clubeId);

        if (!result) throw new ApiError('Erro ao remover clube');

        return result;
    }
}
