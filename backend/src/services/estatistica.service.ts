import { EstatisticaRepository } from '../repositories/estatistica.repository';
import { EstatisticaDTO } from '../types/estatistica';
import { ApiError } from '../utils/apiError';

export class EstatisticaService {
  private repository = new EstatisticaRepository();

  async createEstatistica(data: EstatisticaDTO) {
    return this.repository.createEstatistica(data);
  }

  async getAllEstatisticas() {
    return this.repository.findAllEstatisticas();
  }

  async getEstatisticaById(estatisticaId: number) {
    if (!estatisticaId) throw new ApiError('estatisticaId não fornecido', 400);

    const estatistica = await this.repository.findEstatisticaById(estatisticaId);

    if (!estatistica) throw new ApiError('Estatistica não encontrada', 404);

    return this.repository.findEstatisticaById(estatisticaId);
  }

  async updateEstatistica(estatisticaId: number, newEstatistica: EstatisticaDTO) {
    if (!estatisticaId) throw new ApiError('estatisticaId não fornecido', 400);

    const estatistica = await this.repository.findEstatisticaById(estatisticaId);

    if (!estatistica) throw new ApiError('Estatistica não encontrada', 404);

    if (newEstatistica.pontos) estatistica.pontos = newEstatistica.pontos;

    if (newEstatistica.partidas) estatistica.partidas = newEstatistica.partidas;

    if (newEstatistica.vitorias) estatistica.vitorias = newEstatistica.vitorias;

    if (newEstatistica.empates) estatistica.empates = newEstatistica.empates;

    if (newEstatistica.derrotas) estatistica.derrotas = newEstatistica.derrotas;

    if (newEstatistica.golsPro) estatistica.golsPro = newEstatistica.golsPro;

    if (newEstatistica.golsContra) estatistica.golsContra = newEstatistica.golsContra;

    if (newEstatistica.saldo) estatistica.saldo = newEstatistica.saldo;

    if (newEstatistica.campeonatoId) estatistica.campeonatoId = newEstatistica.campeonatoId;

    if (newEstatistica.clubeId) estatistica.clubeId = newEstatistica.clubeId;

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
