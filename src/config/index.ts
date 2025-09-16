import dotenv from 'dotenv';
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';
export const PORT = process.env.PORT || 3000;
