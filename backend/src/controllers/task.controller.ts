import { Request, Response, NextFunction } from 'express';
import { injectable } from 'tsyringe';
import { TaskService } from '../services/task.service';

@injectable()
export class TaskController {
  constructor(private taskService: TaskService) {}

  createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = await this.taskService.createTask(req.body, req.user._id);
      res.status(201).json(task);
    } catch (err) {
      next(err);
    }
  };

  getTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await this.taskService.getTasks(req.user._id);
      res.json(tasks);
    } catch (err) {
      next(err);
    }
  };

  getTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = await this.taskService.getTaskById(req.params.id, req.user._id);
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json(task);
    } catch (err) {
      next(err);
    }
  };

  updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updated = await this.taskService.updateTask(req.params.id, req.user._id, req.body);
      if (!updated) return res.status(404).json({ message: 'Task not found' });
      res.json(updated);
    } catch (err) {
      next(err);
    }
  };

  deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await this.taskService.deleteTask(req.params.id, req.user._id);
      if (!deleted) return res.status(404).json({ message: 'Task not found' });
      res.json({ message: 'Task deleted' });
    } catch (err) {
      next(err);
    }
  };
}
