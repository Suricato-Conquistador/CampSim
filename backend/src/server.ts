import 'dotenv/config';
import app from './app';
import { prisma } from './config/prisma';

const { PORT } = process.env || 3000;

async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log('Conectado ao banco de dados');
    } catch(error) {
        console.error('Erro ao conectar ao banco', error);
    }
}

connectDatabase();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
