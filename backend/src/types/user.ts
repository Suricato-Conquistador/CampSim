import { Role } from './enums';

export interface RegisterDTO {
    email: string;
    senha: string;
    role: Role;
}

export interface LoginDTO {
    email: string;
    senha: string;
}
