import { ClubeRepository } from '../repositories/clube.repository';
import { ClubeDTO } from '../types/clube';

export class ClubeService {
  private repository = new ClubeRepository();

  async createClube(data: ClubeDTO) {
    return this.repository.createClube(data);
  }

  async getAllClubes() {
    return this.repository.findAllClubes();
  }

  async getClubeById(clubeId: number) {
    if (!clubeId) throw new Error('clubeId não fornecido');

    const clube = await this.repository.findClubeById(clubeId);

    if (!clube) throw new Error('Clube não encontrado');

    return clube;
  }

  async updateClube(clubeId: number, newClube: ClubeDTO) {
    if (!clubeId) throw new Error('clubeId não fornecido');

    const clube = await this.repository.findClubeById(clubeId);

    if (!clube) throw new Error('Clube não encontrado');

    if (newClube.nome) clube.nome = newClube.nome;

    if (newClube.imagem) clube.imagem = newClube.imagem;

    const updatedClube = await this.repository.updateClube(clubeId, clube);

    return updatedClube;
  }

  async deleteClube(clubeId: number) {
    if (!clubeId) throw new Error('clubeId não fornecido');

    const clube = await this.repository.findClubeById(clubeId);

    if (!clube) throw new Error('Clube não encontrado');

    const result = await this.repository.deleteClube(clubeId);

    if (!result) throw new Error('Erro ao remover clube');

    return result;
  }
}
