import {Sequelize} from "sequelize";


 const sequelize = new Sequelize (
   `${process.env.DATABASE_DB}`,
   `${process.env.DATABASE_USER}`,
   `${process.env.DATABASE_PASSWORD}`,
   {
     host: `${process.env.DATABASE_HOST}`,
    dialect: 'mysql'
  })

  try {
    sequelize.authenticate();
    console.log('Connection successfully.');
  } catch (error) {
    console.error('Unable to connect: ', error);
  }

  sequelize.close()
  
export default sequelize
