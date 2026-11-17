// Rotas de Tarefa com validação Zod (UUID no param, body validado)
import { Router } from 'express';
import {
  criarTarefa,
  listarTarefas,
  buscarTarefa,
  atualizarTarefa,
  removerTarefa,
} from '../controllers/tarefaController.js';
import { validate } from '../middlewares/validate.js';
import {
  createTarefaSchema,
  updateTarefaSchema,
  uuidParam,
} from '../middlewares/validationSchemas.js';

const router = Router();

router.post('/', validate(createTarefaSchema), criarTarefa);
router.get('/', listarTarefas);
router.get('/:objectId', validate(uuidParam, 'params'), buscarTarefa);
router.put('/:objectId', validate(uuidParam, 'params'), validate(updateTarefaSchema), atualizarTarefa);
router.delete('/:objectId', validate(uuidParam, 'params'), removerTarefa);

export default router;
