import { Router } from 'express';
import { DemandController } from '../controllers/demand.controller';

const router = Router();
const controller = new DemandController();

/**
 * @openapi
 * /demands:
 *   get:
 *     summary: Lista todas as demandas
 *     tags:
 *       - Demands
 *     responses:
 *       200:
 *         description: Lista de demandas retornada com sucesso
 */
router.get('/', controller.getAll);

/**
 * @openapi
 * /demands/{id}:
 *   get:
 *     summary: Busca uma demanda pelo ID
 *     tags:
 *       - Demands
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Demanda encontrada
 *       404:
 *         description: Demanda não encontrada
 */
router.get('/:id', controller.getById);

/**
 * @openapi
 * /demands:
 *   post:
 *     summary: Cria uma nova demanda
 *     tags:
 *       - Demands
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Demanda criada com sucesso
 */
router.post('/', controller.create);

/**
 * @openapi
 * /demands/{id}:
 *   put:
 *     summary: Atualiza uma demanda existente
 *     tags:
 *       - Demands
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Demanda atualizada com sucesso
 *       404:
 *         description: Demanda não encontrada
 */
router.put('/:id', controller.update);

/**
 * @openapi
 * /demands/{id}:
 *   delete:
 *     summary: Remove uma demanda
 *     tags:
 *       - Demands
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Demanda removida com sucesso
 *       404:
 *         description: Demanda não encontrada
 */
router.delete('/:id', controller.delete);

export default router;
