import { ClubeRepository } from '../repositories/clube.repository';
import { ClubeDTO } from '../types/clube';
import { ApiError } from '../utils/apiError';

export class ClubeService {
  private repository = new ClubeRepository();

  async createClube(data: ClubeDTO) {
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

  async updateClube(clubeId: number, newClube: ClubeDTO) {
    if (!clubeId) throw new ApiError('clubeId não fornecido', 400);

    const clube = await this.repository.findClubeById(clubeId);

    if (!clube) throw new ApiError('Clube não encontrado', 404);

    if (newClube.nome) clube.nome = newClube.nome;

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
