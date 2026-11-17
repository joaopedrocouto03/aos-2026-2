// Rotas de Message com validação Zod
import { Router } from 'express';
import {
  criarMensagem,
  listarMensagens,
  buscarMensagem,
  atualizarMensagem,
  removerMensagem,
} from '../controllers/messageController.js';
import { validate } from '../middlewares/validate.js';
import {
  createMessageSchema,
  updateMessageSchema,
  idParam,
} from '../middlewares/validationSchemas.js';

const router = Router();

router.post('/', validate(createMessageSchema), criarMensagem);
router.get('/', listarMensagens);
router.get('/:id', validate(idParam, 'params'), buscarMensagem);
router.put('/:id', validate(idParam, 'params'), validate(updateMessageSchema), atualizarMensagem);
router.delete('/:id', validate(idParam, 'params'), removerMensagem);

export default router;
