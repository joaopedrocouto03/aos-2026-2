// Regras de negócio de Tarefa — acessa o banco e lança AppError se necessário
import db from '../models/index.js';
import { AppError } from '../middlewares/index.js';

export const criarTarefa = async (dados) => {
  const tarefa = await db.Tarefa.create(dados);
  return tarefa;
};

export const listarTarefas = async () => {
  return await db.Tarefa.findAll();
};

export const buscarTarefa = async (objectId) => {
  const tarefa = await db.Tarefa.findByPk(objectId);
  if (!tarefa) throw new AppError('Tarefa não encontrada', 404);
  return tarefa;
};

export const atualizarTarefa = async (objectId, dados) => {
  const tarefa = await buscarTarefa(objectId);
  await tarefa.update(dados);
  return tarefa;
};

export const removerTarefa = async (objectId) => {
  const tarefa = await buscarTarefa(objectId);
  await tarefa.destroy();
};
