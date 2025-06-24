import { CampeonatoRepository } from '../repositories/campeonato.repository';
import { CampeonatoDTO } from '../types/campeonato';

export class CampeonatoService {
  private repository = new CampeonatoRepository();

  async createCampeonato(data: CampeonatoDTO) {
    return this.repository.createCampeonato(data);
  }

  async getAllCampeonatos() {
    return this.repository.findAllCampeonatos();
  }

  async getCampeonatoById(campeonatoId: number) {
    if (!campeonatoId) throw new Error('campeonatoId não fornecido');

    const campeonato = await this.repository.findCampeonatoById(campeonatoId);

    if (!campeonato) throw new Error('Campeonato não encontrado');

    return campeonato;
  }

  async updateCampeonato(campeonatoId: number, newCampeonato: CampeonatoDTO) {
    if (!campeonatoId) throw new Error('campeonatoId não fornecido');

    const campeonato = await this.repository.findCampeonatoById(campeonatoId);

    if (!campeonato) throw new Error('Campeonato não encontrado');

    if (newCampeonato.nome) campeonato.nome = newCampeonato.nome;

    if (newCampeonato.formato) campeonato.formato = newCampeonato.formato;

    if (newCampeonato.finalizado) campeonato.finalizado = newCampeonato.finalizado;

    const updatedCampeonato = await this.repository.updateCampeonato(campeonatoId, newCampeonato);

    return updatedCampeonato;
  }

  async deleteCampeonato(campeonatoId: number) {
    if (!campeonatoId) throw new Error('campeonatoId não encontrado');

    const campeonato = await this.repository.findCampeonatoById(campeonatoId);

    if (!campeonato) throw new Error('Campeonato não encontrado');

    const result = await this.repository.deleteCampeonato(campeonatoId);

    if (!result) throw new Error('Erro ao remover campeonato');

    return result;
  }
}
