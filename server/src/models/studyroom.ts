import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Studyroom = db.define('Studyroom', {
    // Por cada valor de la tabla (menos id), 
    // en DataTypes usar el tipo de dato especificados en mysql
    name: {
        type: DataTypes.STRING
    },
    capacity: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Studyroom; 