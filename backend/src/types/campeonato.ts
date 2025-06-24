import { Formato } from './enums';

export interface CampeonatoDTO {
  nome: string;
  formato: Formato;
  finalizado: boolean;
  userId: number;
}
