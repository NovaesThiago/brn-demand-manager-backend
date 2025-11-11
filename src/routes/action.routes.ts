import { Router } from 'express';
import { ActionController } from '../controllers/action.controller';

const router = Router();
const controller = new ActionController();

/**
 * @openapi
 * /actions:
 *   get:
 *     summary: Lista ações vinculadas a uma demanda
 *     tags:
 *       - Actions
 *     parameters:
 *       - name: demandId
 *         in: query
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de ações da demanda
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   demandId:
 *                     type: integer
 */
router.get('/', controller.getByDemand);

/**
 * @openapi
 * /actions:
 *   post:
 *     summary: Cria uma nova ação vinculada a uma demanda
 *     tags:
 *       - Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - demandId
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               demandId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ação criada com sucesso
 */
router.post('/', controller.create);

export default router;
