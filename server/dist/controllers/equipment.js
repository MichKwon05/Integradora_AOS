"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEquipment = exports.postEquipment = exports.deleteEquipment = exports.getEquipment = exports.getEquipments = void 0;
const equipment_1 = __importDefault(require("../models/equipment"));
const getEquipments = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listEquipments = yield equipment_1.default.findAll();
    response.json(listEquipments);
});
exports.getEquipments = getEquipments;
const getEquipment = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const equipment = yield equipment_1.default.findByPk(id);
    if (equipment) {
        response.json(equipment);
    }
    else {
        response.status(404).json({
            mensaje: `Equipo con id ${id} no existe :(`
        });
    }
});
exports.getEquipment = getEquipment;
const deleteEquipment = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const equipment = yield equipment_1.default.findByPk(id);
    if (!equipment) {
        response.json({
            mensaje: `Equipo con id ${id} no existe :(`
        });
    }
    else {
        yield equipment.destroy();
        response.json({
            mensaje: `Equipo Eliminado con exito`
        });
    }
});
exports.deleteEquipment = deleteEquipment;
const postEquipment = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    try {
        yield equipment_1.default.create(body);
        response.json({
            mensaje: 'Equipo Agregado con exito'
        });
    }
    catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        });
    }
});
exports.postEquipment = postEquipment;
const updateEquipment = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    const { id } = request.params;
    try {
        const equipment = yield equipment_1.default.findByPk(id);
        if (equipment) {
            yield equipment.update(body);
            response.json({
                mensaje: `Equipo Actualizado con exito`
            });
        }
        else {
            response.json({
                mensaje: `Equipo con id ${id} no existe :(`
            });
        }
    }
    catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        });
    }
});
exports.updateEquipment = updateEquipment;
