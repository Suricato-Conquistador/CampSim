import { Router } from 'express';
import { viewOwner } from '../controllers/user.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/owner', authenticateToken, viewOwner);

export default router;
