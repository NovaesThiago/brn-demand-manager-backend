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

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use('/providers', providerRoutes);
app.use('/demands', demandRoutes);
app.use('/actions', actionRoutes);
app.use(express.json());
app.use(providerRoutes);

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/docs`);
});


app.get('/provedores', async (req, res) => {
  const provedores = await prisma.provider.findMany();
  res.json(provedores);
});

app.post('/provedores', async (req, res) => {
  const { name, email } = req.body;

  const novo = await prisma.provider.create({
    data: { name, email },
  });
  res.json(novo);
});

// Você pode seguir com rotas para demandas e ações técnicas aqui

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});