"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Book = connection_1.default.define('Book', {
    // Por cada valor de la tabla (menos isbn),  
    // en DataTypes usar el tipo de dato especificados en mysql
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    author: {
        type: sequelize_1.DataTypes.STRING
    },
    editorial: {
        type: sequelize_1.DataTypes.STRING
    },
    publishAge: {
        type: sequelize_1.DataTypes.INTEGER
    },
    status: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Book;
