import { Router } from 'express';
import {
    createEstatistica,
    getAllEstatisticas,
    getEstatisticaById,
    updateEstatistica,
    deleteEstatistica,
} from '../controllers/estatistica.controller';
import { authenticateToken } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { createEstatisticaSchema, updateEstatisticaSchema } from '../schemas/estatistica.schema';

const router = Router();

router.post('/', authenticateToken, validate(createEstatisticaSchema), createEstatistica);
router.get('/', authenticateToken, getAllEstatisticas);
router.get('/:id', authenticateToken, getEstatisticaById);
router.patch('/:id', authenticateToken, validate(updateEstatisticaSchema), updateEstatistica);
router.delete('/:id', authenticateToken, deleteEstatistica);

export default router;
