// Controller fino de User — chama o service e responde com o status correto
import * as userService from '../services/userService.js';

export const criarUsuario = async (req, res) => {
  const usuario = await userService.criarUsuario(req.body);
  res.status(201).json(usuario);
};

export const listarUsuarios = async (req, res) => {
  const usuarios = await userService.listarUsuarios();
  res.status(200).json(usuarios);
};

export const buscarUsuario = async (req, res) => {
  const usuario = await userService.buscarUsuario(Number(req.params.id));
  res.status(200).json(usuario);
};

export const atualizarUsuario = async (req, res) => {
  const usuario = await userService.atualizarUsuario(Number(req.params.id), req.body);
  res.status(200).json(usuario);
};

export const removerUsuario = async (req, res) => {
  await userService.removerUsuario(Number(req.params.id));
  res.status(200).json({ mensagem: 'Usuário removido com sucesso' });
};
