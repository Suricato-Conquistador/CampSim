import { z } from 'zod';

export const updateUserSchema = z.object({
    nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres'),
    email: z.string().email('O email inválido'),
    senha: z.string().min(7, 'A senha deve ter ao menos 7 caracteres'),
  });
  
  export type UpdateUserDTO = z.infer<typeof updateUserSchema>;