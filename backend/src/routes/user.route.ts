import { Router } from 'express';
import { viewOwner, getUserById, updateUser, deleteUser } from '../controllers/user.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/owner', authenticateToken, viewOwner);
router.get('/:id', getUserById);
router.patch('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

export default router;
