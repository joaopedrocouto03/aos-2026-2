// Controller fino de Tarefa — chama o service e responde com o status correto
import * as tarefaService from '../services/tarefaService.js';

export const criarTarefa = async (req, res) => {
  const tarefa = await tarefaService.criarTarefa(req.body);
  res.status(201).json(tarefa);
};

export const listarTarefas = async (req, res) => {
  const tarefas = await tarefaService.listarTarefas();
  res.status(200).json(tarefas);
};

export const buscarTarefa = async (req, res) => {
  const tarefa = await tarefaService.buscarTarefa(req.params.objectId);
  res.status(200).json(tarefa);
};

export const atualizarTarefa = async (req, res) => {
  const tarefa = await tarefaService.atualizarTarefa(req.params.objectId, req.body);
  res.status(200).json(tarefa);
};

export const removerTarefa = async (req, res) => {
  await tarefaService.removerTarefa(req.params.objectId);
  res.status(200).json({ mensagem: 'Tarefa removida com sucesso' });
};
