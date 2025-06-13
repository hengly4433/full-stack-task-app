import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import 'reflect-metadata'; // Required for tsyringe
import { errorHandler } from './middlewares/error.middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger';
import { AuthRoutes } from './routes/auth.routes';
import { TaskRoutes } from './routes/task.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const authRoutes = new AuthRoutes();
const taskRoutes = new TaskRoutes();

app.use('/api/auth', authRoutes.router);
app.use('/api/tasks', taskRoutes.router);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

export default app;
