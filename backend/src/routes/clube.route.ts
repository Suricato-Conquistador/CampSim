import { Router } from 'express';
import {
  createClube,
  getAllClubes,
  getClubeById,
  updateClube,
  deleteClube,
} from '../controllers/clube.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/', authenticateToken, createClube);
router.get('/', authenticateToken, getAllClubes);
router.get('/:id', authenticateToken, getClubeById);
router.patch('/:id', authenticateToken, updateClube);
router.delete('/:id', authenticateToken, deleteClube);

export default router;
