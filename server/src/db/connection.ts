import { Sequelize } from "sequelize";

const sequelize = new Sequelize('inta', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize;