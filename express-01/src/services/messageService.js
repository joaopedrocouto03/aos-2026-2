// Regras de negócio de Message — acessa o banco e lança AppError se necessário
import db from '../models/index.js';
import { AppError } from '../middlewares/index.js';

export const criarMensagem = async (dados) => {
  const mensagem = await db.Message.create(dados);
  return mensagem;
};

export const listarMensagens = async () => {
  return await db.Message.findAll({ include: [{ model: db.User }] });
};

export const buscarMensagem = async (id) => {
  const mensagem = await db.Message.findByPk(id, {
    include: [{ model: db.User }],
  });
  if (!mensagem) throw new AppError('Mensagem não encontrada', 404);
  return mensagem;
};

export const atualizarMensagem = async (id, dados) => {
  const mensagem = await buscarMensagem(id);
  await mensagem.update(dados);
  return mensagem;
};

export const removerMensagem = async (id) => {
  const mensagem = await buscarMensagem(id);
  await mensagem.destroy();
};
