import { prisma } from '../src/config/prisma';

async function main() {
  console.log('Limpando database...');
  await prisma.$executeRawUnsafe(`
        TRUNCATE TABLE
            "Estatistica",
            "Partida",
            "Rodada",
            "Campeonato",
            "Clube",
            "User"
        RESTART IDENTITY CASCADE;
    `);

  console.log('Limpeza concluída!');
}

main()
  .catch((error) => {
    console.error('Erro ao limpar banco', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
