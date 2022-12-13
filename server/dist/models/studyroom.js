"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Studyroom = connection_1.default.define('Studyroom', {
    // Por cada valor de la tabla (menos id), 
    // en DataTypes usar el tipo de dato especificados en mysql
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    capacity: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Studyroom;
