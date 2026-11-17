// Controller fino de Message — chama o service e responde com o status correto
import * as messageService from '../services/messageService.js';

export const criarMensagem = async (req, res) => {
  const mensagem = await messageService.criarMensagem(req.body);
  res.status(201).json(mensagem);
};

export const listarMensagens = async (req, res) => {
  const mensagens = await messageService.listarMensagens();
  res.status(200).json(mensagens);
};

export const buscarMensagem = async (req, res) => {
  const mensagem = await messageService.buscarMensagem(Number(req.params.id));
  res.status(200).json(mensagem);
};

export const atualizarMensagem = async (req, res) => {
  const mensagem = await messageService.atualizarMensagem(Number(req.params.id), req.body);
  res.status(200).json(mensagem);
};

export const removerMensagem = async (req, res) => {
  await messageService.removerMensagem(Number(req.params.id));
  res.status(200).json({ mensagem: 'Mensagem removida com sucesso' });
};
