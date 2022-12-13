"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipment_1 = require("../controllers/equipment");
const router = (0, express_1.Router)();
router.get('/', equipment_1.getEquipments);
router.get('/:id', equipment_1.getEquipment);
router.delete('/:id', equipment_1.deleteEquipment);
router.post('/', equipment_1.postEquipment);
router.put('/:id', equipment_1.updateEquipment);
exports.default = router;
