import { Router } from 'express';
import { container } from 'tsyringe';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dto';
import { protect } from '../middlewares/auth.middleware';
import { TaskController } from '../controllers/task.controller';

export class TaskRoutes {
  public router = Router();
  private controller: TaskController;

  constructor() {
    this.controller = container.resolve(TaskController);
    this.initRoutes();
  }

  private initRoutes() {
    this.router.use(protect);
    this.router.get('/', this.controller.getTasks);
    this.router.get('/:id', this.controller.getTask);
    this.router.post('/', validationMiddleware(CreateTaskDto), this.controller.createTask);
    this.router.put('/:id', validationMiddleware(UpdateTaskDto), this.controller.updateTask);
    this.router.delete('/:id', this.controller.deleteTask);
  }
}
