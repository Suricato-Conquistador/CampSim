import { Role } from './enums';

export interface UserDTO {
  nome: string;
  email: string;
  senha: string;
  role: Role;
}

export interface LoginDTO {
  email: string;
  senha: string;
}
