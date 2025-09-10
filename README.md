# CampSim
![GitHub last commit](https://img.shields.io/github/last-commit/Suricato-Conquistador/CampSim)
![GitHub issues](https://img.shields.io/github/issues/Suricato-Conquistador/CampSim)
![License](https://img.shields.io/github/license/Suricato-Conquistador/CampSim)
![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier)

Uma aplicação web com o intuito de criar campeonatos personalizados e simular campeonatos existentes.

>_💻 Status do projeto: Em desenvolvimento._

## Resumo
O CampSim é uma aplicação web que permite a **criação de tabelas de campeonatos fictícias** e a **simulação de tabelas de campeonatos** já existentes.

## Tecnologias
[![Tecnologias](https://skillicons.dev/icons?i=ts,prisma,express,postgres)]([https://skillicons.dev](https://skillicons.dev))

<!-- 

![GitHub pull requests](https://img.shields.io/github/issues-pr/Suricato-Conquistador/CampSim)

## Instalação
## Uso

## API - Swagger

## Versionamento
-->

## Organização de Diretórios e Arquivos

### Backend

```
prisma/
├── schema.prisma    // Definição dos modelos de dados e configurações do Prisma
└── seed.ts          // Script para povoar o banco com dados iniciais (seed)
src/
├── __tests__/      
├── config/          // Configurações globais (Prisma client, dotenv, etc)
├── constants/       
├── controllers/     // Camada responsável por receber as requisições e responder ao cliente
├── middleware/      // Middlewares Express (Autenticação, validação de request, etc)
├── repositories/    // Camada de acesso ao banco de dados
├── routes/          // Definição e organização das rotas da aplicação
├── schemas/
├── services/        // Regras de negócio e validações
├── types/           // Tipagens compartilhadas (DTOs, enums, etc)
├── utils/
├── app.ts           // Instancia o app Express, aplica middlewares e rotas
└── server.ts        // Inicializa o servidor e conecta ao banco de dados
```

### Banco de Dados

A estrutura do banco de dados seguiu o seguinte modelo:

![Modelo Logico](./docs/LogicModel.PNG)

## Metas
- [X] Definir e modelar o banco de dados com Prisma
- [X] Criar seeders iniciais
- [X] Implementar autenticação com JWT e bcrypt
- [X] Desenvolver os módulos da aplicação
- [X] Criar validações de entrada
- [X] Implementar a estrutura de repositório, service e controller
- [X] Criar rotas RESTful para cada entidade
- [X] Proteger rotas com autenticação
- [X] Configurar tratamento global de erros
- [ ] Adicionar testes unitários
- [ ] Documentar principais rotas e respostas com swagger
