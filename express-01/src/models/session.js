// Modelo Session — armazena sessões no banco (connect-session-sequelize)
export const getSessionModel = (sequelize, { DataTypes }) => {
  const Session = sequelize.define(
    'Session',
    {
      sid: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      expires: {
        type: DataTypes.DATE,
      },
      data: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'sessions',
      timestamps: true,
    }
  );
  return Session;
};
