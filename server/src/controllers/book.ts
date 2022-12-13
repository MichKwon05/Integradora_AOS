import { Request, Response } from "express";
import Book from '../models/book';


export const getBooks = async (request: Request, response: Response) => {
    const listBooks = await Book.findAll();

    response.json(listBooks);
}

export const getBook = async (request: Request, response: Response) => {
    const { id } = request.params;
    const book = await Book.findByPk(id);

    if (book) {
        response.json(book);
    } else {
        response.status(404).json({
            mensaje: `Libro con isbn ${id} no existe :(`
        })
    }
}

export const deleteBook = async (request: Request, response: Response) => {
    const { id } = request.params;
    const book = await Book.findByPk(id);

    if (!book) {
        response.json({
            mensaje: `Libro con isbn ${id} no existe :(`
        })
    } else {
        await book.destroy();
        response.json({
            mensaje: `Libro Eliminado con exito`
        })
    }


}

export const postBook = async (request: Request, response: Response) => {
    const { body } = request;

    try {
        await Book.create(body);

        response.json({
            mensaje: 'Libro Agregado con exito'
        })
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}

export const updateBook = async (request: Request, response: Response) => {
    const { body } = request;
    const { id } = request.params;

    try {
        const book = await Book.findByPk(id);

        if (book) {
            await book.update(body);
            response.json({
                mensaje: `Libro Actualizado con exito`
            })
        } else {
            response.json({
                mensaje: `Libro con isbn ${id} no existe :(`
            })
        }
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}