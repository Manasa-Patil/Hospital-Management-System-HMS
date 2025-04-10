import { Router } from 'express';
import { login, createUser } from '../controller/userController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/login', login);
router.post('/admin/create-user', verifyToken, createUser);

export default router;
