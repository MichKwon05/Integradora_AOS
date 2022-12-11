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
exports.updateBook = exports.postBook = exports.deleteBook = exports.getBook = exports.getBooks = void 0;
const book_1 = __importDefault(require("../models/book"));
const getBooks = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listBooks = yield book_1.default.findAll();
    response.json(listBooks);
});
exports.getBooks = getBooks;
const getBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { ibsm } = request.params;
    const book = yield book_1.default.findByPk(ibsm);
    if (book) {
        response.json(book);
    }
    else {
        response.status(404).json({
            mensaje: `Libro con isbn ${ibsm} no existe :(`
        });
    }
});
exports.getBook = getBook;
const deleteBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { ibsm } = request.params;
    const book = yield book_1.default.findByPk(ibsm);
    if (!book) {
        response.json({
            mensaje: `Libro con isbn ${ibsm} no existe :(`
        });
    }
    else {
        yield book.destroy();
        response.json({
            mensaje: `Libro Eliminado con exito`
        });
    }
});
exports.deleteBook = deleteBook;
const postBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    try {
        yield book_1.default.create(body);
        response.json({
            mensaje: 'Libro Agregado con exito'
        });
    }
    catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        });
    }
});
exports.postBook = postBook;
const updateBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    const { ibsm } = request.params;
    try {
        const book = yield book_1.default.findByPk(ibsm);
        if (book) {
            yield book.update(body);
            response.json({
                mensaje: `Libro Actualizado con exito`
            });
        }
        else {
            response.json({
                mensaje: `Libro con isbn ${ibsm} no existe :(`
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
exports.updateBook = updateBook;
