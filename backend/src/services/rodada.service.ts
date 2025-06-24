import RodadaRepository from '../repositories/rodada.repository';
import { RodadaDTO } from '../types/rodada';

export default class RodadaService {
  private repository = new RodadaRepository();

  async createRodada(data: RodadaDTO) {
    return this.repository.createRodada(data);
  }

  async getAllRodadas() {
    return this.repository.getAllRodadas();
  }

  async getRodadaById(rodadaId: number) {
    if (!rodadaId) throw new Error('rodadaId não fornecido');

    const rodada = await this.repository.getRodadaById(rodadaId);

    if (!rodada) throw new Error('Rodada não encontrada');

    return rodada;
  }

  async updateRodada(rodadaId: number, newRodada: RodadaDTO) {
    if (!rodadaId) throw new Error('rodadaId não fornecido');

    const rodada = await this.repository.getRodadaById(rodadaId);

    if (!rodada) throw new Error('Rodada não encontrada');

    if (newRodada.numero) rodada.numero = newRodada.numero;

    if (newRodada.campeonatoId) rodada.campeonatoId = newRodada.campeonatoId;

    const updatedRodada = await this.repository.updateRodada(rodadaId, rodada);

    return updatedRodada;
  }

  async deleteRodada(rodadaId: number) {
    if (!rodadaId) throw new Error('rodadaId não fornecido');

    const rodada = await this.repository.getRodadaById(rodadaId);

    if (!rodada) throw new Error('Rodada não encontrada');

    const result = await this.repository.deleteRodada(rodadaId);

    if (!result) throw new Error('Erro ao remover rodada');

    return result;
  }
}
