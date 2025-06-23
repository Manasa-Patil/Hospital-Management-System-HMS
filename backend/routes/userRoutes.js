import { Router } from 'express';
import { login, createUser,getProfile } from '../controller/userController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/login', login);
router.post('/admin/create-user',createUser);
router.get('/profile', verifyToken, getProfile); // ✅ Add this

export default router;
