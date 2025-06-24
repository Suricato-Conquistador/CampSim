import express from 'express';
import authRoutes from './routes/auth.route';
import userRoutes from './routes/user.route';
import campeonatoRoutes from './routes/campeonato.route';
//errorHandler

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/campeonatos', campeonatoRoutes);

//errorHandler

export default app;
