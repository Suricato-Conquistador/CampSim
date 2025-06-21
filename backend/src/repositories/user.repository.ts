import { prisma } from "../config/prisma";

export class UserRepository {
    async findUserById(userId: number) {
        return prisma.user.findUnique({ where: { id: userId }});
    }
}
