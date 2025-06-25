import express from 'express';
import authRoutes from './routes/auth.route';
import userRoutes from './routes/user.route';
import campeonatoRoutes from './routes/campeonato.route';
import rodadasRoutes from './routes/rodada.route';
import clubesRoutes from './routes/clube.route';
import partidasRoutes from './routes/partida.route';
import estatisticasRoutes from './routes/estatistica.route';
//errorHandler

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/campeonatos', campeonatoRoutes);
app.use('/api/rodadas', rodadasRoutes);
app.use('/api/clubes', clubesRoutes);
app.use('/api/partidas', partidasRoutes);
app.use('/api/estatisticas', estatisticasRoutes);

//errorHandler

export default app;
