// Regras de negócio de User — acessa o banco e lança AppError se necessário
import db from '../models/index.js';
import { AppError } from '../middlewares/index.js';

export const criarUsuario = async (dados) => {
  const usuario = await db.User.create(dados);
  return usuario;
};

export const listarUsuarios = async () => {
  return await db.User.findAll();
};

export const buscarUsuario = async (id) => {
  const usuario = await db.User.findByPk(id);
  if (!usuario) throw new AppError('Usuário não encontrado', 404);
  return usuario;
};

export const atualizarUsuario = async (id, dados) => {
  const usuario = await buscarUsuario(id);
  await usuario.update(dados);
  return usuario;
};

export const removerUsuario = async (id) => {
  const usuario = await buscarUsuario(id);
  await usuario.destroy();
};
