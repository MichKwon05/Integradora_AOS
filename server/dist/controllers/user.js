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
exports.loginUser = exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield user_1.default.findAll();
    response.json(listUsers);
});
exports.getUsers = getUsers;
const getUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        response.json(user);
    }
    else {
        response.status(404).json({
            mensaje: `Usuario con id ${id} no existe :(`
        });
    }
});
exports.getUser = getUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        response.json({
            mensaje: `Usuario con id ${id} no existe :(`
        });
    }
    else {
        yield user.destroy();
        response.json({
            mensaje: `Usuario Eliminado con exito`
        });
    }
});
exports.deleteUser = deleteUser;
const postUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, phone, address, email, password } = request.body;
    const user = yield user_1.default.findOne({ where: { email: email } });
    if (user) {
        return response.status(400).json({
            mensaje: `Ya existe un usuario con el correo ${email}`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield user_1.default.create({
            name: name,
            surname: surname,
            phone: phone,
            address: address,
            email: email,
            password: hashedPassword
        });
        response.json({
            mensaje: 'Usuario Agregado con exito'
        });
    }
    catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        });
    }
});
exports.postUser = postUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    const { id } = request.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (user) {
            yield user.update(body);
            response.json({
                mensaje: `Usuario Actualizado con exito`
            });
        }
        else {
            response.json({
                mensaje: `Usuario con id ${id} no existe :(`
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
exports.updateUser = updateUser;
const loginUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = request.body;
    // Validación de Usuario
    const user = yield user_1.default.findOne({ where: { email: email } });
    if (!user) {
        return response.status(400).json({
            mensaje: `No existe un usuario con ese correo`
        });
    }
    // Validacion de Contraseña
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return response.status(400).json({
            mensaje: 'Contraseña Incorrecta'
        });
    }
    // Generación del TOKEN
    const token = jsonwebtoken_1.default.sign({
        email: email
    }, process.env.SECRET_KEY || 'miguelA');
    response.json({ token });
});
exports.loginUser = loginUser;
