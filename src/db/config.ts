import {Sequelize} from 'sequelize'

export const db = new Sequelize (
    process.env.DATABASE_DB,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: 3306
    }
)