import { prisma } from '../config/prisma';
import { RegisterDTO } from '../schemas/auth.schema';

export class AuthRepository {
  async createUser(registerDTO: RegisterDTO) {
    return prisma.user.create({ data: registerDTO });
  }

  async findUserByEmail(userEmail: string) {
    return prisma.user.findUnique({ where: { email: userEmail } });
  }
}
