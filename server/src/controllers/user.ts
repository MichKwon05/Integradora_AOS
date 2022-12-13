import { Request, Response } from "express";
import User from '../models/user';
//import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';


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