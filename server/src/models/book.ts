import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Book = db.define('Book', {
    // Por cada valor de la tabla (menos isbn),  
    // en DataTypes usar el tipo de dato especificados en mysql
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    editorial: {
        type: DataTypes.STRING
    },
    publishAge: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Book;