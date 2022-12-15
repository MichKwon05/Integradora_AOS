import { Request, Response } from "express";
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    const { name, surname, phone, address, email, password } = request.body;

    const user = await User.findOne({ where: { email: email } });

    if(user) {
        return response.status(400).json({
            mensaje: `Ya existe un usuario con el correo ${email}`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create(
            {
                name: name,
                surname: surname,
                phone: phone,
                address: address,
                email: email,
                password: hashedPassword
            }
        );

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

export const loginUser = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    // Validación de Usuario
    const user: any = await User.findOne({ where: { email: email } });

    if(!user){
        return response.status(400).json({
            mensaje: `No existe un usuario con ese correo`
        })
    }

    // Validacion de Contraseña
    const passwordValid = await bcrypt.compare(password, user.password);
    if(!passwordValid){
        return response.status(400).json({
            mensaje: 'Contraseña Incorrecta'
        })
    }

    // Generación del TOKEN
    const token = jwt.sign({
        email: email
    }, process.env.SECRET_KEY || 'miguelA')

    response.json({token})
}