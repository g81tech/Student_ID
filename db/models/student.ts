import {Sequelize,  DataTypes, Model, Optional } from 'sequelize';

const sequelize = new Sequelize(`mysql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:3306/${process.env.DATABASE_DB}`);

interface StudentInterface extends Model{
    idStudent: number;
    codeStudent: number;
    name: string;
    password: string;
    course: string;
    semester: string;
    cpf: string;
    rg: string;
    sex: string;
    birthDate: string;
    linkedin: string;
    photo: string;
    lattes: string;
    dateRegister: string;
    dateRevalidate: string;
  };

/*interface StudentCreationAttributes
  extends Optional<StudentInterface, 'idStudent'> {}

interface StudentInstance
  extends Model<StudentInterface, StudentCreationAttributes>,
  StudentInterface {
      createdAt?: Date;
      updatedAt?: Date;
    }
*/

    const Student = sequelize.define<StudentInterface>('Student',
    {
      idStudent: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        //type: DataTypes.UUID,
        type: DataTypes.BIGINT,
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
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      course: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      semester: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      cpf: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      rg: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      sex: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      birthDate: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      linkedin: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      photo: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      lattes: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      dateRegister: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      dateRevalidate: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    });

    async function doStuff() {
        const instance = await Student.findByPk(1, {
          rejectOnEmpty: true,
        });
        console.log(instance.idStudent);
      }

//Cria as tabelas se não houver
//    Student.sync();

//Apaga e cria novamente as tabelas
Student.sync({force: true});
  
  export default Student;