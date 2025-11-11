import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { errorHandler } from './middlewares/error.middleware';
import providerRoutes from './routes/provider.routes';
import demandRoutes from './routes/demand.routes';
import actionRoutes from './routes/action.routes';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use('/providers', providerRoutes);
app.use('/demands', demandRoutes);
app.use('/actions', actionRoutes);

app.get('/provedores', async (req, res) => {
  const provedores = await prisma.provedor.findMany();
  res.json(provedores);
});

app.post('/provedores', async (req, res) => {
  const { nomeFantasia, nomeResponsavel, contato } = req.body;
  const novo = await prisma.provedor.create({
    data: { nomeFantasia, nomeResponsavel, contato },
  });
  res.json(novo);
});

// Você pode seguir com rotas para demandas e ações técnicas aqui

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});