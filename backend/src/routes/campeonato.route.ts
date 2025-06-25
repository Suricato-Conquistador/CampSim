import { Router } from 'express';
import {
  createCampeonato,
  getAllCampeonatos,
  getCampeonatoById,
  updateCampeonato,
  deleteCampeonato,
} from '../controllers/campeonato.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/', authenticateToken, createCampeonato);
router.get('/', authenticateToken, getAllCampeonatos);
router.get('/:id', authenticateToken, getCampeonatoById);
router.patch('/:id', authenticateToken, updateCampeonato);
router.delete('/:id', authenticateToken, deleteCampeonato);

export default router;
