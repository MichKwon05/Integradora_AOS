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
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
//import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';
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
/*
export const loginUser = async (req: Request, res: Response) =>{
    const {email , password} = req.body;

    ///validamos si existe
    const user: any = await User.findOne({ where: {email: email}});

    if (!user) {
        return res.status(400).json({
            msg: `No existe el usuario con el correo ${email} en la base de datos`
        })
    }
    console.log('sigo')
    ///validamos password
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
        return res.status(400).json({
            msg : `Password incorrecta`
        })
    }

    /// token
    const token= jwt.sign({
        email: email
    }, process.env.SECRET_KEY
    );

    res.json({token});

}
*/
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
    const { body } = request;
    try {
        yield user_1.default.create(body);
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
