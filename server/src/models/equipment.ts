import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Equipments = db.define('Equipments', {
    // Por cada valor de la tabla (menos id), 
    // en DataTypes usar el tipo de dato especificado en mysql
    name: {
        type: DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Equipments;