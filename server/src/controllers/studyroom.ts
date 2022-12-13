import { Request, Response } from "express";
import Studyroom from '../models/studyroom';


export const getStudyrooms = async (request: Request, response: Response) => {
    const listRooms = await Studyroom.findAll();

    response.json(listRooms);
}

export const getStudyroom = async (request: Request, response: Response) => {
    const { id } = request.params;
    const room = await Studyroom.findByPk(id);

    if (room) {
        response.json(room);
    } else {
        response.status(404).json({
            mensaje: `La sala con id [${id}] no existe :(`
        })
    }
}

export const deleteStudyroom = async (request: Request, response: Response) => {
    const { id } = request.params;
    const room = await Studyroom.findByPk(id);

    if (!room) {
        response.json({
            mensaje: `Sala con id ${id} no existe :(`
        })
    } else {
        await room.destroy();
        response.json({
            mensaje: `Sala Eliminada con exito`
        })
    }
}

export const postStudyroom = async (request: Request, response: Response) => {
    const { body } = request;

    try {
        await Studyroom.create(body);

        response.json({
            mensaje: 'Sala Agregada con exito'
        })
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}

export const updateStudyroom = async (request: Request, response: Response) => {
    const { body } = request;
    const { id } = request.params;

    try {
        const room = await Studyroom.findByPk(id);

        if (room) {
            await room.update(body);
            response.json({
                mensaje: `Sala Actualizada con exito`
            })
        } else {
            response.json({
                mensaje: `Sala con id ${id} no existe :(`
            })
        }
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}