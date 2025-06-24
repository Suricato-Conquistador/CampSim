import { prisma } from "../config/prisma";
import { UserDTO } from "../types/user";

export class UserRepository {
    async findUserById(userId: number) {
        return prisma.user.findUnique({ where: { id: userId }});
    }

    async updateUser(userId: number, newUser: UserDTO) {
        return prisma.user.update({ where: { id: userId }, data: newUser});
    }

    async deleteUser(userId: number) {
        return prisma.user.delete({ where: { id: userId }});
    }
}
