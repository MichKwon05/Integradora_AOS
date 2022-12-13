import { Router } from 'express';
import { deleteEquipment, getEquipment, getEquipments, postEquipment, updateEquipment } from '../controllers/equipment';

const router = Router();

router.get('/', getEquipments);
router.get('/:id', getEquipment);
router.delete('/:id', deleteEquipment);
router.post('/', postEquipment);
router.put('/:id', updateEquipment);

export default router;