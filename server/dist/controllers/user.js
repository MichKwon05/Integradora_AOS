"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (request, response) => {
    response.json({
        mensaje: 'api getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (request, response) => {
    const { id } = request.params;
    response.json({
        mensaje: 'api getUser',
        id: id
    });
};
exports.getUser = getUser;
const deleteUser = (request, response) => {
    const { id } = request.params;
    response.json({
        mensaje: 'api deleteUser',
        id: id
    });
};
exports.deleteUser = deleteUser;
const postUser = (request, response) => {
    const { body } = request;
    console.log(body);
    response.json({
        mensaje: 'api postUser',
        body
    });
};
exports.postUser = postUser;
const updateUser = (request, response) => {
    const { body } = request;
    const { id } = request.params;
    console.log(body);
    response.json({
        mensaje: 'api updateUser',
        id,
        body
    });
};
exports.updateUser = updateUser;
