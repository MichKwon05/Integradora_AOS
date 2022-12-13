import { Router } from 'express';
import { deleteUser, getUser, getUsers, loginUser, postUser, updateUser } from '../controllers/user';
import bcrypt from '../models/user';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.put('/:id', updateUser);

router.post('/login',loginUser);

export default router;