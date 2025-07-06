import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Gerando seed...');

    const admin = await prisma.user.create({
        data: {
            nome: 'Administrador',
            email: 'admin@gmail.com',
            senha: await bcrypt.hash('admin1234', 10),
            role: Role.ADMIN,
        },
    });

    const sandro = await prisma.user.create({
        data: {
            nome: 'Sandro',
            email: 'sandro@gmail.com',
            senha: await bcrypt.hash('sandro1234', 10),
            role: Role.USER,
        },
    });

    const campeonato1 = await prisma.campeonato.create({
        data: { nome: 'Premier League', userId: admin.id },
    });

    const campeonato2 = await prisma.campeonato.create({
        data: { nome: 'Campeonato Brasileiro', userId: sandro.id },
    });

    const clubes = await prisma.$transaction([
        prisma.clube.create({
            data: {
                nome: 'Liverpool',
                imagem: 'https://img1.gratispng.com/lnd/20241225/ib/8bdd071b5a311bdb157574c3552688.webp',
            },
        }),
        prisma.clube.create({ data: { nome: 'Everton' } }),
        prisma.clube.create({ data: { nome: 'Corinthians' } }),
        prisma.clube.create({ data: { nome: 'Palmeiras' } }),
        prisma.clube.create({ data: { nome: 'Flamengo' } }),
        prisma.clube.create({ data: { nome: 'Fluminense' } }),
    ]);

    const [liverpool, everton, corinthians, palmeiras, flamengo, fluminense] = clubes;

    const [rodada1, rodada2, rodada3, rodada4] = await prisma.$transaction([
        prisma.rodada.create({ data: { numero: 1, campeonatoId: campeonato1.id } }),
        prisma.rodada.create({ data: { numero: 1, campeonatoId: campeonato2.id } }),
        prisma.rodada.create({ data: { numero: 2, campeonatoId: campeonato1.id } }),
        prisma.rodada.create({ data: { numero: 2, campeonatoId: campeonato2.id } }),
    ]);

    await prisma.$transaction([
        prisma.partida.create({
            data: {
                golsMandante: 4,
                golsVisitante: 1,
                clubeMandanteId: liverpool.id,
                clubeVisitanteId: everton.id,
                rodadaId: rodada1.id,
            },
        }),
        prisma.partida.create({
            data: {
                golsMandante: 0,
                golsVisitante: 1,
                clubeMandanteId: everton.id,
                clubeVisitanteId: liverpool.id,
                rodadaId: rodada3.id,
            },
        }),
        prisma.partida.create({
            data: {
                golsMandante: 4,
                golsVisitante: 0,
                clubeMandanteId: corinthians.id,
                clubeVisitanteId: palmeiras.id,
                rodadaId: rodada2.id,
            },
        }),
        prisma.partida.create({
            data: {
                golsMandante: 3,
                golsVisitante: 0,
                clubeMandanteId: fluminense.id,
                clubeVisitanteId: flamengo.id,
                rodadaId: rodada2.id,
            },
        }),
        prisma.partida.create({
            data: {
                golsMandante: 0,
                golsVisitante: 5,
                clubeMandanteId: palmeiras.id,
                clubeVisitanteId: corinthians.id,
                rodadaId: rodada4.id,
            },
        }),
        prisma.partida.create({
            data: {
                golsMandante: 0,
                golsVisitante: 2,
                clubeMandanteId: flamengo.id,
                clubeVisitanteId: fluminense.id,
                rodadaId: rodada4.id,
            },
        }),
    ]);

    await prisma.$transaction([
        prisma.estatistica.create({
            data: {
                pontos: 6,
                partidas: 2,
                vitorias: 2,
                golsPro: 5,
                golsContra: 1,
                saldo: 4,
                campeonatoId: campeonato1.id,
                clubeId: liverpool.id,
            },
        }),
        prisma.estatistica.create({
            data: {
                partidas: 2,
                derrotas: 2,
                golsPro: 1,
                golsContra: 5,
                saldo: -4,
                campeonatoId: campeonato1.id,
                clubeId: everton.id,
            },
        }),
        prisma.estatistica.create({
            data: {
                pontos: 6,
                partidas: 2,
                vitorias: 2,
                golsPro: 9,
                saldo: 9,
                campeonatoId: campeonato2.id,
                clubeId: corinthians.id,
            },
        }),
        prisma.estatistica.create({
            data: {
                partidas: 2,
                derrotas: 2,
                golsContra: 9,
                saldo: -9,
                campeonatoId: campeonato2.id,
                clubeId: palmeiras.id,
            },
        }),
        prisma.estatistica.create({
            data: {
                partidas: 2,
                derrotas: 2,
                golsContra: 5,
                saldo: -5,
                campeonatoId: campeonato2.id,
                clubeId: flamengo.id,
            },
        }),
        prisma.estatistica.create({
            data: {
                partidas: 2,
                vitorias: 2,
                golsPro: 5,
                saldo: 5,
                campeonatoId: campeonato2.id,
                clubeId: fluminense.id,
            },
        }),
    ]);

    //Testes de pagination e limit

    for(let i = 1; i < 150; i++) {
        let camp = await prisma.campeonato.create({ data: { nome: `Campeonato ${i}`, userId: sandro.id }});
        let club1 = await prisma.clube.create({ data: { nome: `Clube ${i}` }});
        let club2 = await prisma.clube.create({ data: { nome: `Clube ${i+150}` }});
        let stat1 = await prisma.estatistica.create({ data: { campeonatoId: camp.id, clubeId: club1.id }});
        let stat2 = await prisma.estatistica.create({ data: { campeonatoId: camp.id, clubeId: club2.id }});
        let turn = await prisma.rodada.create({ data: { numero: i, campeonatoId: camp.id }});
        let match1 = await prisma.partida.create({ data: { golsMandante: Math.floor(Math.random()*10), golsVisitante: Math.floor(Math.random()*10), clubeMandanteId: club1.id, clubeVisitanteId: club2.id, rodadaId: turn.id }});
        let match2 = await prisma.partida.create({ data: { golsMandante: Math.floor(Math.random()*10), golsVisitante: Math.floor(Math.random()*10), clubeMandanteId: club2.id, clubeVisitanteId: club1.id, rodadaId: turn.id }});
    }

    console.log('Seed gerada com sucesso!');
}

main()
    .catch((error) => {
        console.error('Erro ao gerar seed', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
