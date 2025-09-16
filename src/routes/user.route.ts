import { Router } from 'express';
import { viewOwner, getUserById, updateUser, deleteUser } from '../controllers/user.controller';
import { authenticateToken } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { updateUserSchema } from '../schemas/user.schema';

const router = Router();

router.get('/owner', authenticateToken, viewOwner);
router.get('/:id', getUserById);
router.patch('/:id', authenticateToken, validate(updateUserSchema), updateUser);
router.delete('/:id', authenticateToken, deleteUser);

export default router;
