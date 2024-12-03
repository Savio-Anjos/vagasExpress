## 🚀 Tecnologias

Este projeto está utilizando as seguintes tecnologias:

- [Node](https://nodejs.org/en)
- [Fastify](https://fastify.dev/)
- [Docker](https://www.docker.com/)
- [Prisma](https://www.prisma.io//)
- [React](https://react.dev/)
- [Next](https://nextjs.org/)


# Principais Rotas da Aplicação

### Candidatos

- **POST** `/candidates`: Cria um novo candidato.
- **POST** `/candidates/auth`: Autentica um candidato.
- **PUT** `/candidates`: Atualiza informações de um candidato.

### Recrutadores

- **POST** `/recruiters`: Cria um novo recrutador.
- **POST** `/recruiters/auth`: Autentica um recrutador.
- **PUT** `/recruiters`: Atualiza informações de um recrutador.

### Vagas

- **POST** `/jobs`: Cria uma nova vaga de emprego.
- **GET** `/jobs`: Lista todas as vagas de emprego.
- **GET** `/jobs/:recruiterId`: Lista todas as vagas cadastradas por um recrutador.
- **GET** `/jobs/candidates/:jobId`: Lista os candidatos inscritos em uma vaga específica.
- **GET** `/jobs/open`: Lista as vagas abertas.
- **GET** `/jobs/details/:jobId`: Obtém os detalhes de uma vaga específica.
- **PUT** `/jobs`: Atualiza informações de uma vaga.
- **DELETE** `/jobs`: Deleta uma vaga.

### Candidaturas

- **POST** `/applications`: Permite que um candidato se inscreva em uma vaga.
- **GET** `/applications/jobs/:jobId`: Lista as candidaturas para uma vaga específica.
- **GET** `/applications/:jobId/:candidateId`: Obtém os detalhes de um candidato específico para uma vaga.

### Detalhes dos Candidatos

- **GET** `/candidates/:candidateId`: Obtém os detalhes de um candidato.

## 🎲 Como acessar o projeto?

### Clone esse repositório

```bash
git clone https://github.com/SENAI-SD/react-pleno-02542-2024-069.848.855-58.git
```

### Navegue até o diretório da API

```bash
cd API
```

### Instale as dependências

```bash
npm i
```

```bash
yarn
```

### Execute o docker compose

```bash
docker compose up
```

### Gere as migrations

```bash
npx prisma generate
```

### Rode as migrations

```bash
npx prisma migrate dev
```

### Inicie a API

```bash
npm run start:dev
```

### Em outro terminal, acesse o frontend

```bash
cd web
```

### Instale as dependências

```bash
npm i
```

### Rode a aplicação

```bash
npm run dev
```

---

<p>Criado com 💙 por <a href='https://github.com/Savio-Anjos/' target='_blank'>Sávio Anjos</a></p>
