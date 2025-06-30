import { prisma } from '../config/prisma';
import { UserDTO } from '../schemas/auth.schema';

export class AuthRepository {
  async createUser(registerDTO: UserDTO) {
    return prisma.user.create({ data: registerDTO });
  }

  async findUserByEmail(userEmail: string) {
    return prisma.user.findUnique({ where: { email: userEmail } });
  }
}
