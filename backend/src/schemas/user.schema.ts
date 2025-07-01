import { z } from 'zod';

export const updateUserSchema = z.object({
    nome: z.string().min(4, 'O nome deve ter ao menos 4 caracteres').optional(),
    email: z.string().email('O email inválido').optional(),
    senha: z.string().min(7, 'A senha deve ter ao menos 7 caracteres').optional(),
});

export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
