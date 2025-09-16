import { Router } from 'express';
import {
    createCampeonato,
    getAllCampeonatos,
    getCampeonatoById,
    updateCampeonato,
    deleteCampeonato,
} from '../controllers/campeonato.controller';
import { authenticateToken } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { createCampeonatoSchema, updateCampeonatoSchema } from '../schemas/campeonato.schema';

const router = Router();

router.post('/', authenticateToken, validate(createCampeonatoSchema), createCampeonato);
router.get('/', authenticateToken, getAllCampeonatos);
router.get('/:id', authenticateToken, getCampeonatoById);
router.patch('/:id', authenticateToken, validate(updateCampeonatoSchema), updateCampeonato);
router.delete('/:id', authenticateToken, deleteCampeonato);

export default router;
