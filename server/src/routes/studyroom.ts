import { Router } from 'express';
import { deleteStudyroom, getStudyroom, getStudyrooms, postStudyroom, updateStudyroom } from '../controllers/studyroom';

const router = Router();

router.get('/', getStudyrooms);
router.get('/:id', getStudyroom);
router.delete('/:id', deleteStudyroom);
router.post('/', postStudyroom);
router.put('/:id', updateStudyroom);

export default router;