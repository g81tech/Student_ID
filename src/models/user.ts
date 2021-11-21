const userModel = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define("user", {
    id_estudante: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    curso_aluno: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    registro_semestre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    matricula: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    rg: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    sexo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    linkedin: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    foto: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    c_lattes: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    data_cadastro: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    data_revalida: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
  return User;
};

export default userModel;
