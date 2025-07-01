import { JWT_SECRET } from '../config';
import { AuthRepository } from '../repositories/auth.repository';
import { RegisterDTO, LoginDTO } from '../schemas/auth.schema';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/apiError';
import { loginSchema, registerSchema } from '../schemas/auth.schema';

export class AuthService {
    private repository = new AuthRepository();

    async register(data: RegisterDTO) {
        const parsed = registerSchema.safeParse(data);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        const existing = await this.repository.findUserByEmail(data.email);

        if (existing) throw new ApiError('Email já cadastrado', 409);

        const hashed = await bcrypt.hash(data.senha, 10);
        return this.repository.createUser({ ...data, senha: hashed });
    }

    async login(data: LoginDTO) {
        const parsed = loginSchema.safeParse(data);

        if (!parsed.success) {
            throw new ApiError(JSON.stringify(parsed.error.format()));
        }

        const user = await this.repository.findUserByEmail(data.email);

        if (!user) throw new ApiError('Credenciais inválidas', 401);

        const match = await bcrypt.compare(data.senha, user.senha);

        if (!match) throw new ApiError('Credenciais inválidas', 401);

        const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

        return { token };
    }
}
