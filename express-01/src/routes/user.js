// Rotas de User com validação Zod
import { Router } from 'express';
import {
  criarUsuario,
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  removerUsuario,
} from '../controllers/userController.js';
import { validate } from '../middlewares/validate.js';
import {
  createUserSchema,
  updateUserSchema,
  idParam,
} from '../middlewares/validationSchemas.js';

const router = Router();

router.post('/', validate(createUserSchema), criarUsuario);
router.get('/', listarUsuarios);
router.get('/:id', validate(idParam, 'params'), buscarUsuario);
router.put('/:id', validate(idParam, 'params'), validate(updateUserSchema), atualizarUsuario);
router.delete('/:id', validate(idParam, 'params'), removerUsuario);

export default router;
