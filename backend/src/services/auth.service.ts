import { JWT_SECRET } from '../config';
import { AuthRepository } from '../repositories/auth.repository';
import { UserDTO, LoginDTO } from '../types/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/apiError';

export class AuthService {
  private repository = new AuthRepository();

  async register(data: UserDTO) {
    const existing = await this.repository.findUserByEmail(data.email);

    if (existing) throw new ApiError('Email já cadastrado', 409);

    const hashed = await bcrypt.hash(data.senha, 10);
    return this.repository.createUser({ ...data, senha: hashed });
  }

  async login(data: LoginDTO) {
    const user = await this.repository.findUserByEmail(data.email);

    if (!user) throw new ApiError('Credenciais inválidas', 401);

    const match = await bcrypt.compare(data.senha, user.senha);

    if (!match) throw new ApiError('Credenciais inválidas', 401);

    const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

    return { token };
  }
}
