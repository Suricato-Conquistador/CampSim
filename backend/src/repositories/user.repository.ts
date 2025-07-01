import { prisma } from '../config/prisma';
import { UpdateUserDTO } from '../schemas/user.schema';

export class UserRepository {
  async findUserById(userId: number) {
    return prisma.user.findUnique({ where: { id: userId } });
  }

  async updateUser(userId: number, newUser: UpdateUserDTO) {
    return prisma.user.update({ where: { id: userId }, data: newUser });
  }

  async deleteUser(userId: number) {
    return prisma.user.delete({ where: { id: userId } });
  }
}
