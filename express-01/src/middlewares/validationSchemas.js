// Schemas Zod centralizados para validação de body e params
import { z } from 'zod';

// ─── User ────────────────────────────────────────────────────────────────────
export const createUserSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  senha: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export const updateUserSchema = z
  .object({
    nome: z.string().min(1).optional(),
    email: z.string().email().optional(),
    senha: z.string().min(6).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo deve ser fornecido',
  });

// ─── Message ─────────────────────────────────────────────────────────────────
export const createMessageSchema = z.object({
  conteudo: z.string().min(1, 'Conteúdo é obrigatório'),
  userId: z.number().int().positive('userId deve ser um inteiro positivo'),
});

export const updateMessageSchema = z
  .object({
    conteudo: z.string().min(1).optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo deve ser fornecido',
  });

// ─── Params numérico (user e message) ────────────────────────────────────────
export const idParam = z.object({
  id: z.coerce.number().int().positive('ID deve ser um inteiro positivo'),
});

// ─── Params UUID (tarefa) ─────────────────────────────────────────────────────
export const uuidParam = z.object({
  objectId: z.string().uuid('objectId deve ser um UUID válido'),
});

// ─── Tarefa ───────────────────────────────────────────────────────────────────
export const createTarefaSchema = z.object({
  descricao: z.string().min(1, 'Descrição é obrigatória'),
  concluida: z.boolean().optional(),
});

export const updateTarefaSchema = z
  .object({
    descricao: z.string().min(1).optional(),
    concluida: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'Pelo menos um campo (descricao ou concluida) deve ser fornecido',
  });
