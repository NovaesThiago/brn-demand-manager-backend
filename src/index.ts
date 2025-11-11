import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import providerRoutes from './routes/provider.routes';
import demandRoutes from './routes/demand.routes';
import actionRoutes from './routes/action.routes';
import { setupSwagger } from './config/swagger';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/providers', providerRoutes);
app.use('/demands', demandRoutes);
app.use('/actions', actionRoutes);

setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Servidor BRN Demand Manager rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});