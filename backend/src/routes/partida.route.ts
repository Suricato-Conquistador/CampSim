import { Router } from 'express';
import {
    createPartida,
    getAllPartidas,
    getPartidaById,
    updatePartida,
    deletePartida,
} from '../controllers/partida.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/', authenticateToken, createPartida);
router.get('/', authenticateToken, getAllPartidas);
router.get('/:id', authenticateToken, getPartidaById);
router.patch('/:id', authenticateToken, updatePartida);
router.delete('/:id', authenticateToken, deletePartida);

export default router;
