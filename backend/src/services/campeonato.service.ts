import { CampeonatoRepository } from '../repositories/campeonato.repository';
import {
    CreateCampeonatoDTO,
    UpdateCampeonatoDTO,
    createCampeonatoSchema,
} from '../schemas/campeonato.schema';
import { ApiError } from '../utils/apiError';

export class CampeonatoService {
    private repository = new CampeonatoRepository();

    async createCampeonato(data: CreateCampeonatoDTO) {
        const parsed = createCampeonatoSchema.safeParse(data);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        return this.repository.createCampeonato(data);
    }

    async getAllCampeonatos() {
        return this.repository.findAllCampeonatos();
    }

    async getCampeonatoById(campeonatoId: number) {
        if (!campeonatoId) throw new ApiError('campeonatoId não fornecido', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        return campeonato;
    }

    async updateCampeonato(campeonatoId: number, newCampeonato: UpdateCampeonatoDTO) {
        const parsed = createCampeonatoSchema.safeParse(newCampeonato);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        if (!campeonatoId) throw new ApiError('campeonatoId não fornecido', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        if (newCampeonato.nome) campeonato.nome = newCampeonato.nome;

        if (newCampeonato.formato) campeonato.formato = newCampeonato.formato;

        if (newCampeonato.finalizado) campeonato.finalizado = newCampeonato.finalizado;

        const updatedCampeonato = await this.repository.updateCampeonato(campeonatoId, campeonato);

        return updatedCampeonato;
    }

    async deleteCampeonato(campeonatoId: number) {
        if (!campeonatoId) throw new ApiError('campeonatoId não encontrado', 400);

        const campeonato = await this.repository.findCampeonatoById(campeonatoId);

        if (!campeonato) throw new ApiError('Campeonato não encontrado', 404);

        const result = await this.repository.deleteCampeonato(campeonatoId);

        if (!result) throw new ApiError('Erro ao remover campeonato');

        return result;
    }
}
