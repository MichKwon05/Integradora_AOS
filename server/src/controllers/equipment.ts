import { Request, Response } from "express";
import Equipment from '../models/equipment';


export const getEquipments = async (request: Request, response: Response) => {
    const listEquipments = await Equipment.findAll();

    response.json(listEquipments);
}

export const getEquipment = async (request: Request, response: Response) => {
    const { id } = request.params;
    const equipment = await Equipment.findByPk(id);

    if (equipment) {
        response.json(equipment);
    } else {
        response.status(404).json({
            mensaje: `Equipo con id ${id} no existe :(`
        })
    }
}

export const deleteEquipment = async (request: Request, response: Response) => {
    const { id } = request.params;
    const equipment = await Equipment.findByPk(id);

    if (!equipment) {
        response.json({
            mensaje: `Equipo con id ${id} no existe :(`
        })
    } else {
        await equipment.destroy();
        response.json({
            mensaje: `Equipo Eliminado con exito`
        })
    }


}

export const postEquipment = async (request: Request, response: Response) => {
    const { body } = request;

    try {
        await Equipment.create(body);

        response.json({
            mensaje: 'Equipo Agregado con exito'
        })
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}

export const updateEquipment = async (request: Request, response: Response) => {
    const { body } = request;
    const { id } = request.params;

    try {
        const equipment = await Equipment.findByPk(id);

        if (equipment) {
            await equipment.update(body);
            response.json({
                mensaje: `Equipo Actualizado con exito`
            })
        } else {
            response.json({
                mensaje: `Equipo con id ${id} no existe :(`
            })
        }
    } catch (error) {
        console.log(error);
        response.json({
            mensaje: 'A ocurrido un error inesperado'
        })
    }
}