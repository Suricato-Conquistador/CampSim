import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    try {
        const hashedPwd = await bcrypt.hash('admin123', 10);
        const user = await prisma.user.create({
            data: {
                email: 'admin@gmail.com',
                senha: hashedPwd,
                role: Role.ADMIN,
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
