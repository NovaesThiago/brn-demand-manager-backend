import { Router } from 'express';
import { DemandController } from '../controllers/demand.controller';

const router = Router();
const controller = new DemandController();

// ✅ Rota com filtros (atualiza a rota GET existente)
router.get('/', controller.getWithFilters);

// ... outras rotas mantidas ...

/**
 * @openapi
 * /demands:
 *   get:
 *     summary: Lista demandas com filtros opcionais
 *     tags: [Demands]
 *     parameters:
 *       - name: status
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           enum: [Pendente, Em Andamento, Concluída, Cancelada]
 *       - name: providerId
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de demandas filtradas
 */
/**
 * @openapi
 * /demands:
 *   post:
 *     summary: Cria uma nova demanda
 *     tags: [Demands]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - type
 *               - status
 *               - providerId
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Diagnóstico de lentidão"
 *               description:
 *                 type: string
 *                 example: "Cliente reporta lentidão na rede durante horário de pico"
 *               type:
 *                 type: string
 *                 enum: [Diagnóstico, Manutenção, Configuração, Instalação, Outro]
 *                 example: "Diagnóstico"
 *               status:
 *                 type: string
 *                 enum: [Pendente, Em Andamento, Concluída, Cancelada]
 *                 example: "Pendente"
 *               providerId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Demanda criada com sucesso
 */