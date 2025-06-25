import { Router } from 'express';
import {
  createEstatistica,
  getAllEstatisticas,
  getEstatisticaById,
  updateEstatistica,
  deleteEstatistica,
} from '../controllers/estatistica.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/', authenticateToken, createEstatistica);
router.get('/', authenticateToken, getAllEstatisticas);
router.get('/:id', authenticateToken, getEstatisticaById);
router.patch('/:id', authenticateToken, updateEstatistica);
router.delete('/:id', authenticateToken, deleteEstatistica);

export default router;
