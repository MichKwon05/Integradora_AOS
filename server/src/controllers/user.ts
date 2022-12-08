import { Request, Response } from "express";
import User from '../models/user';


export const getUsers = async (request: Request, response: Response) => {
    const listUsers = await User.findAll();

    response.json(listUsers);
}

export const getUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    const user = await User.findByPk(id);

    if (user) {
        response.json(user);
    } else {
        response.status(404).json({
            mensaje: `Usuario con id ${id} no existe :(`
        })
    }
}

export const deleteUser = async (request: Request, response: Response) => {
    const { id } = request.params;
    const user = await User.findByPk(id);

    if (!user) {
        response.json({
            mensaje: `Usuario con id ${id} no existe :(`
        })
    } else {
        await user.destroy();
        response.json({
            mensaje: `Usuario Eliminado con exito`
        })
    }


}

export const postUser = async (request: Request, response: Response) => {
    const { body } = request;

    try {
        await User.create(body);

        response.json({
            mensaje: 'Usuario Agregado con exito'
        })
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}

export const updateUser = async (request: Request, response: Response) => {
    const { body } = request;
    const { id } = request.params;

    try {
        const user = await User.findByPk(id);

        if (user) {
            await user.update(body);
            response.json({
                mensaje: `Usuario Actualizado con exito`
            })
        } else {
            response.json({
                mensaje: `Usuario con id ${id} no existe :(`
            })
        }
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}