import { z } from 'zod';
import { Role } from '../types/enums';

export const registerSchema = z.object({
  nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres'),
  email: z.string().email('O email inválido'),
  senha: z.string().min(7, 'A senha deve ter ao menos 7 caracteres'),
  role: z.nativeEnum(Role).default(Role.USER),
});

export type RegisterDTO = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email('O email inválido'),
  senha: z.string().min(7, 'A senha deve ter ao menos 7 caracteres'),
});

export type LoginDTO = z.infer<typeof loginSchema>;
