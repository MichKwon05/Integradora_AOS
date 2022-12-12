import { DataTypes } from 'sequelize';
import db from '../db/connection';
import bcrypt from '../models/user';

const User = db.define('User', {
    // Por cada valor de la tabla (menos id), 
    // en DataTypes usar el tipo de dato especificados en mysql
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
})


export default User;