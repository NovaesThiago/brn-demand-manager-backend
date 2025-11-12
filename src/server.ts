import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './middlewares/error.middleware';
import providerRoutes from './routes/provider.routes';
import demandRoutes from './routes/demand.routes';
import actionRoutes from './routes/action.routes';
import { setupSwagger } from './config/swagger';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// ✅ MIDDLEWARES (SEM DUPLICAÇÕES)
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// ✅ ROTAS (SEM DUPLICAÇÕES)
app.use('/providers', providerRoutes);
app.use('/demands', demandRoutes);
app.use('/actions', actionRoutes);

// ✅ SWAGGER
setupSwagger(app);

// ✅ ROTA HEALTH CHECK
app.get('/', (req, res) => {
  res.send('Servidor BRN Demand Manager rodando!');
});

// ✅ APENAS UM app.listen()
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/docs`);
});