// Modelo Message — representa uma mensagem associada a um usuário
export const getMessageModel = (sequelize, { DataTypes }) => {
  const Message = sequelize.define(
    'Message',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      conteudo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'messages',
      timestamps: true,
    }
  );
  return Message;
};
