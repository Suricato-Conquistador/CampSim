import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private repository = new UserRepository();

    async getOwner(userId: number) {
        if(!userId) throw new Error('userId não fornecido');

        const user = await this.repository.findUserById(userId);

        if(!user) throw new Error('Usuário não encontrado');

        const { senha, ...returnedUser } = user;

        return returnedUser;
    }
}
