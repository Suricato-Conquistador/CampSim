import { PartidaRepository } from '../repositories/partida.repository';
import { PartidaDTO } from '../types/partida';
import { ApiError } from '../utils/apiError';

export class PartidaService {
  private repository = new PartidaRepository();

  async createPartida(data: PartidaDTO) {
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

  async updatePartida(partidaId: number, newPartida: PartidaDTO) {
    if (!partidaId) throw new ApiError('partidaId não fornecido', 400);

    const partida = await this.repository.findPartidaById(partidaId);

    if (!partida) throw new ApiError('Partida não encontrado', 404);

    if (newPartida.golsMandante) partida.golsMandante = newPartida.golsMandante;

    if (newPartida.golsVisitante) partida.golsVisitante = newPartida.golsVisitante;

    if (newPartida.clubeMandanteId) partida.clubeMandanteId = newPartida.clubeMandanteId;

    if (newPartida.clubeVisitanteId) partida.clubeVisitanteId = newPartida.clubeVisitanteId;

    if (newPartida.rodadaId) partida.rodadaId = newPartida.rodadaId;

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
