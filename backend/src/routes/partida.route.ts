import { Router } from 'express';
import {
    createPartida,
    getAllPartidas,
    getPartidaById,
    updatePartida,
    deletePartida,
} from '../controllers/partida.controller';
import { authenticateToken } from '../middleware/auth';
import { createPartidaSchema, updatePartidaSchema } from '../schemas/partida.schema';
import { validate } from '../middleware/validate';

const router = Router();

router.post('/', authenticateToken, validate(createPartidaSchema), createPartida);
router.get('/', authenticateToken, getAllPartidas);
router.get('/:id', authenticateToken, getPartidaById);
router.patch('/:id', authenticateToken, validate(updatePartidaSchema), updatePartida);
router.delete('/:id', authenticateToken, deletePartida);

export default router;
