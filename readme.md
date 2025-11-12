# 🚀 BRN Demand Manager

Sistema interno para gestão de demandas técnicas de provedores de internet.

## 🛠️ Tecnologias

- **Backend**: Node.js, TypeScript, Express
- **Banco**: PostgreSQL, Prisma ORM
- **Container**: Docker, Docker Compose
- **Documentação**: Swagger/OpenAPI

## 📦 Como executar

### Pré-requisitos
- Docker e Docker Compose instalados

### Executar com Docker
```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd brn-demand-manager

# 2. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env se necessário

# 3. Execute a aplicação
docker-compose up -d

# 4. Acesse a aplicação
# API: http://localhost:3000
# Documentação: http://localhost:3000/docs