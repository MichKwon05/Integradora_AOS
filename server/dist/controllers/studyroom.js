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
exports.updateStudyroom = exports.postStudyroom = exports.deleteStudyroom = exports.getStudyroom = exports.getStudyrooms = void 0;
const studyroom_1 = __importDefault(require("../models/studyroom"));
const getStudyrooms = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listRooms = yield studyroom_1.default.findAll();
    response.json(listRooms);
});
exports.getStudyrooms = getStudyrooms;
const getStudyroom = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const room = yield studyroom_1.default.findByPk(id);
    if (room) {
        response.json(room);
    }
    else {
        response.status(404).json({
            mensaje: `La sala con id [${id}] no existe :(`
        });
    }
});
exports.getStudyroom = getStudyroom;
const deleteStudyroom = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const room = yield studyroom_1.default.findByPk(id);
    if (!room) {
        response.json({
            mensaje: `Sala con id ${id} no existe :(`
        });
    }
    else {
        yield room.destroy();
        response.json({
            mensaje: `Sala Eliminada con exito`
        });
    }
});
exports.deleteStudyroom = deleteStudyroom;
const postStudyroom = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    try {
        yield studyroom_1.default.create(body);
        response.json({
            mensaje: 'Sala Agregada con exito'
        });
    }
    catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        });
    }
});
exports.postStudyroom = postStudyroom;
const updateStudyroom = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    const { id } = request.params;
    try {
        const room = yield studyroom_1.default.findByPk(id);
        if (room) {
            yield room.update(body);
            response.json({
                mensaje: `Sala Actualizada con exito`
            });
        }
        else {
            response.json({
                mensaje: `Sala con id ${id} no existe :(`
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
exports.updateStudyroom = updateStudyroom;
