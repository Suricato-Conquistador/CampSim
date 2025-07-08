import { ClubeRepository } from '../repositories/clube.repository';
<<<<<<< HEAD
import {
    CreateClubeDTO,
    UpdateClubeDTO,
} from '../schemas/clube.schema';
=======
import { CreateClubeDTO, QueryClubeDTO, UpdateClubeDTO } from '../schemas/clube.schema';
>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
import { ApiError } from '../utils/apiError';

export class ClubeService {
    private repository = new ClubeRepository();

    async createClube(data: CreateClubeDTO) {
        return this.repository.createClube(data);
    }

<<<<<<< HEAD
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
        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        const updatedClube = await this.repository.updateClube(clubeId, clube);

        return updatedClube;
    }

    async deleteClube(clubeId: number) {
        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        const result = await this.repository.deleteClube(clubeId);

        if (!result) throw new ApiError('Erro ao remover clube');

=======
    async countClubes(filter: any) {
        return this.repository.countClubes(filter);
    }

    async getAllClubes(queryClubeDTO: QueryClubeDTO) {
        return this.repository.findAllClubes(queryClubeDTO);
    }

    async getClubeById(clubeId: number) {
        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        return clube;
    }

    async updateClube(clubeId: number, newClube: UpdateClubeDTO) {
        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        const updatedClube = await this.repository.updateClube(clubeId, clube);

        return updatedClube;
    }

    async deleteClube(clubeId: number) {
        if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

        const clube = await this.repository.findClubeById(clubeId);

        if (!clube) throw new ApiError('Clube não encontrado', 404);

        const result = await this.repository.deleteClube(clubeId);

        if (!result) throw new ApiError('Erro ao remover clube');

>>>>>>> 577d468ad5d06750b9058cf0eea1f004f81e1543
        return result;
    }
}
