import { Router } from "express"
import { createRodada, getAllRodadas, getRodadaById, updateRodada, deleteRodada } from "../controllers/rodada.controller"
import { authenticateToken } from "../middleware/auth"

const router = Router();

router.post('/', authenticateToken, createRodada);
router.get('/', authenticateToken, getAllRodadas);
router.get('/:id', authenticateToken, getRodadaById);
router.patch('/:id', authenticateToken, updateRodada);
router.delete('/:id', authenticateToken, deleteRodada);

export default router;
