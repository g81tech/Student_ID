import {db} from '../config';
import {DataTypes} from 'sequelize';


export const StudentCheckModel = db.define("StudentID", {
    idStudent: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        //type: DataTypes.UUID,
        type: DataTypes.INTEGER,
        unique: true,
      },
      codeStudent: {
        allowNull: false,
        autoIncrement: false,
        //type: DataTypes.UUID,
        type: DataTypes.BIGINT,
        unique: true,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      course: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      semester: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      rg: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      sex: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      birthDate: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      linkedin: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      photo: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      lattes: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      dateRegister: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      dateRevalidate: {
        allowNull: true,
        type: DataTypes.STRING,
      },
})