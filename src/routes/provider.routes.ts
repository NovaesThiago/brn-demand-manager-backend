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
 *         description: Lista de providers retornada com sucesso
 */
router.get('/', controller.getAll);

/**
 * @openapi
 * /providers/{id}:
 *   get:
 *     summary: Busca um provider pelo ID
 *     tags:
 *       - Providers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Provider encontrado
 *       404:
 *         description: Provider não encontrado
 */
router.get('/:id', controller.getById);

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
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Provider criado com sucesso
 */
router.post('/', controller.create);

/**
 * @openapi
 * /providers/{id}:
 *   put:
 *     summary: Atualiza um provider existente
 *     tags:
 *       - Providers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
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
 *       200:
 *         description: Provider atualizado com sucesso
 *       404:
 *         description: Provider não encontrado
 */
router.put('/:id', controller.update);

/**
 * @openapi
 * /providers/{id}:
 *   delete:
 *     summary: Remove um provider
 *     tags:
 *       - Providers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Provider removido com sucesso
 *       404:
 *         description: Provider não encontrado
 */
router.delete('/:id', controller.delete);

export default router;
