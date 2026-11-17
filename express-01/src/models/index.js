// Inicializa o Sequelize, registra todos os modelos e define associações
import { Sequelize } from 'sequelize';
import { getUserModel } from './user.js';
import { getMessageModel } from './message.js';
import { getSessionModel } from './session.js';
import { getTarefaModel } from './tarefa.js';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

const User = getUserModel(sequelize, Sequelize);
const Message = getMessageModel(sequelize, Sequelize);
const Session = getSessionModel(sequelize, Sequelize);
const Tarefa = getTarefaModel(sequelize, Sequelize);

// Associações
User.hasMany(Message, { foreignKey: 'userId' });
Message.belongsTo(User, { foreignKey: 'userId' });

const db = { sequelize, Sequelize, User, Message, Session, Tarefa };

export default db;
