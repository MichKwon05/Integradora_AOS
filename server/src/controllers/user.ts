import { Request, Response } from "express";


export const getUsers = (request: Request, response: Response) => {
    response.json({
        mensaje: 'api getUsers'
    })
}

export const getUser = (request: Request, response: Response) => {
    const { id } = request.params;

    response.json({
        mensaje: 'api getUser',
        id: id
    })
}

export const deleteUser = (request: Request, response: Response) => {
    const { id } = request.params;

    response.json({
        mensaje: 'api deleteUser',
        id: id
    })
}

export const postUser = (request: Request, response: Response) => {
    const { body } = request;

    console.log(body);
    response.json({
        mensaje: 'api postUser',
        body
    })
}

export const updateUser = (request: Request, response: Response) => {
    const { body } = request;
    const { id } = request.params;

    console.log(body);
    response.json({
        mensaje: 'api updateUser',
        id,
        body
    })
}