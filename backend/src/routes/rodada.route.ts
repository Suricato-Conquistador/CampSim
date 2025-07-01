import { Router } from 'express';
import {
    createRodada,
    getAllRodadas,
    getRodadaById,
    updateRodada,
    deleteRodada,
} from '../controllers/rodada.controller';
import { authenticateToken } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { createRodadaSchema, updateRodadaSchema } from '../schemas/rodada.schema';

const router = Router();

router.post('/', authenticateToken, validate(createRodadaSchema), createRodada);
router.get('/', authenticateToken, getAllRodadas);
router.get('/:id', authenticateToken, getRodadaById);
router.patch('/:id', authenticateToken, validate(updateRodadaSchema), updateRodada);
router.delete('/:id', authenticateToken, deleteRodada);

export default router;
