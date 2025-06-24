import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    try {
        const hashedPwd = await bcrypt.hash('admin123', 10);
        const user = await prisma.user.create({
            data: {
                nome: 'Administrador',
                email: 'admin@gmail.com',
                senha: hashedPwd,
                role: Role.ADMIN,
            }
        });
        const campeonato = await prisma.campeonato.create({
            data: {
                nome: 'Premier League',
                userId: 1,
            }
        });
        const clube = await prisma.clube.create({
            data: {
                nome: 'Liverpool',
                imagem: 'https://img1.gratispng.com/lnd/20241225/ib/8bdd071b5a311bdb157574c3552688.webp'
            }
        });
        const rodada = await prisma.rodada.create({
            data: {
                numero: 1,
                campeonatoId: 1
            }
        });
        console.log('Seed gerada com sucesso!');
    } catch(error) {
        console.error('Erro no seed', error);
        process.exit(1);
    } finally {
        async() => await prisma.$disconnect();
    }
}

main();
