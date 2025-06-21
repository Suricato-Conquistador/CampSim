import express from 'express';
import authRoutes from './routes/auth.route';
import userRoutes from './routes/user.route';
//errorHandler

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

//errorHandler

export default app;
