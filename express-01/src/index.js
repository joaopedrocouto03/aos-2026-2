import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';
import db from './models/index.js';
import { userRouter, messageRouter, tarefaRouter } from './routes/index.js';
import { errorMiddleware } from './middlewares/index.js';

const app = express();

// Segurança
app.use(helmet());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
    credentials: true,
  })
);

// Rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/users', userRouter);
app.use('/messages', messageRouter);
app.use('/tarefas', tarefaRouter);

// Tratamento de erros global
app.use(errorMiddleware);

// Sincroniza banco e inicia servidor
const PORT = process.env.PORT || 3000;
const ERASE = process.env.ERASE_DATABASE_ON_SYNC === 'true';

db.sequelize.sync({ force: ERASE }).then(() => {
  console.log('Banco sincronizado.');
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});

export default app;
