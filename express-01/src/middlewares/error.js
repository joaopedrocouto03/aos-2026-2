// AppError — erro customizado com statusCode HTTP
// errorMiddleware — intercepta todos os erros e responde no formato padrão
import { ZodError } from 'zod';

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
  }
}

export const errorMiddleware = (err, req, res, next) => {
  // Erros de validação Zod → 400
  if (err instanceof ZodError) {
    const message = err.issues.map((issue) => issue.message).join(', ');
    return res.status(400).json({ status: 'fail', message });
  }

  // Erros operacionais conhecidos (AppError)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // Erros inesperados → 500
  console.error(err);
  return res.status(500).json({
    status: 'error',
    message: 'Erro interno do servidor.',
  });
};
