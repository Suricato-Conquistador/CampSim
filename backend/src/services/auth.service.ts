import { JWT_SECRET } from "../config";
import { AuthRepository } from "../repositories/auth.repository";
import { UserDTO, LoginDTO } from "../types/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthService {
    private repository = new AuthRepository();

    async register(data: UserDTO) {
        const existing = await this.repository.findUserByEmail(data.email);

        if(existing) throw new Error('Email já cadastrado');

        const hashed = await bcrypt.hash(data.senha, 10);
        return this.repository.createUser({ ...data, senha: hashed });
    }

    async login(data: LoginDTO) {
        const user = await this.repository.findUserByEmail(data.email);

        if(!user) throw new Error('Credenciais inválidas');

        const match = await bcrypt.compare(data.senha, user.senha);

        if(!match) throw new Error('Credenciais inválidas');

        const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

        return { token };
    }
}
