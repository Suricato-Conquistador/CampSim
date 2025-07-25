import { Router } from 'express';
import {
    createClube,
    getAllClubes,
    getClubeById,
    updateClube,
    deleteClube,
} from '../controllers/clube.controller';
import { authenticateToken } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { createClubeSchema, updateClubeSchema } from '../schemas/clube.schema';

const router = Router();

router.post('/', authenticateToken, validate(createClubeSchema), createClube);
router.get('/', authenticateToken, getAllClubes);
router.get('/:id', authenticateToken, getClubeById);
router.patch('/:id', authenticateToken, validate(updateClubeSchema), updateClube);
router.delete('/:id', authenticateToken, deleteClube);

export default router;
