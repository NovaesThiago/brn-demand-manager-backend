import { Router } from 'express';
import { ActionController } from '../controllers/action.controller';

const router = Router();
const controller = new ActionController();

router.get('/', controller.getByDemand); // GET /actions?demandId=123
router.post('/', controller.create);     // POST /actions

export default router;