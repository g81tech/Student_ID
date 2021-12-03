import {Sequelize} from 'sequelize'

export const db = new Sequelize (
    process.env.DATABASE_DB || 'db',
    process.env.DATABASE_USER || 'user',
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST || 'localhost',
        port: 3306
    }
)