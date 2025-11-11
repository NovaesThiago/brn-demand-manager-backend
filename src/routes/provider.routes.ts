import { Router } from 'express';
import { ProviderController } from '../controllers/provider.controller';

const router = Router();
const controller = new ProviderController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

/**
 * @openapi
 * /providers:
 *   get:
 *     summary: Lista todos os providers
 *     tags:
 *       - Providers
 *     responses:
 *       200:
 *         description: Lista de providers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get('/providers', async (req, res) => {
  // lógica para listar providers
  res.json([{ id: 1, name: 'Thiago', email: 'thiago@example.com' }]);
});

/**
 * @openapi
 * /providers:
 *   post:
 *     summary: Cria um novo provider
 *     tags:
 *       - Providers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Provider criado com sucesso
 */
router.post('/providers', async (req, res) => {
  // lógica para criar provider
  res.status(201).json({ message: 'Provider criado' });
});

export default router;