import { UserRepository } from '../repositories/user.repository';
import { UpdateUserDTO, updateUserSchema } from '../schemas/user.schema';
import bcrypt from 'bcryptjs';
import { ApiError } from '../utils/apiError';

export class UserService {
  private repository = new UserRepository();

  async getOwner(userId: number) {
    if (!userId) throw new ApiError('userId não fornecido', 400);

    const user = await this.repository.findUserById(userId);

    if (!user) throw new ApiError('Usuário não encontrado', 404);

    const { senha, ...returnedUser } = user;

    return returnedUser;
  }

  async getUserById(userId: number) {
    if (!userId) throw new ApiError('userId não fornecido', 400);

    const user = await this.repository.findUserById(userId);

    if (!user) throw new ApiError('Usuário não encontrado', 404);

    const { senha, ...returnedUser } = user;

    return returnedUser;
  }

  async updateUser(userId: number, newUser: UpdateUserDTO) {
    const parsed = updateUserSchema.safeParse(newUser);

    if(!parsed.success) {
      throw new ApiError(`Dados inválidos: ${JSON.stringify(parsed.error.format())}`);
    }

    if (!userId) throw new ApiError('userId não fornecido', 400);

    const user = await this.repository.findUserById(userId);

    if (!user) throw new ApiError('Usuário não encontrado', 404);

    if (newUser.nome) user.nome = newUser.nome;

    if (newUser.email) user.email = newUser.email;

    if (newUser.senha) {
      const newPassword = await bcrypt.hash(newUser.senha, 10);
      user.senha = newPassword;
    }

    const updatedUser = await this.repository.updateUser(userId, user);

    const { senha, ...returnedUser } = updatedUser;

    return returnedUser;
  }

  async deleteUser(userId: number) {
    if (!userId) throw new ApiError('userId não fornecido', 400);

    const user = await this.repository.findUserById(userId);

    if (!user) throw new ApiError('Usuário não encontrado', 404);

    const result = await this.repository.deleteUser(userId);

    if (!result) throw new ApiError('Erro ao remover usuário');

    return result;
  }
}
