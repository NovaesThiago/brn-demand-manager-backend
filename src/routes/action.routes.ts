import { Router } from 'express';
import { ActionController } from '../controllers/action.controller';

const router = Router();
const controller = new ActionController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;