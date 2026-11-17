// Modelo Tarefa — representa uma tarefa com UUID gerado pelo back-end
export const getTarefaModel = (sequelize, { DataTypes }) => {
  const Tarefa = sequelize.define(
    'Tarefa',
    {
      objectId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'tarefas',
      timestamps: true,
    }
  );
  return Tarefa;
};
