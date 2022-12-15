import { Router } from 'express';
import { deleteUser, getUser, getUsers, loginUser, postUser, updateUser } from '../controllers/user';
import validateToken from './validate-token';

const router = Router();

router.get('/', /*validateToken,*/ getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.put('/:id', updateUser);
router.post('/login', loginUser);

export default router;