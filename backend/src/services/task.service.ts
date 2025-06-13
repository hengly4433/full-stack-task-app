import { injectable, inject } from 'tsyringe';
import { ITask } from '../interfaces/task.interface';
import { ITaskRepository } from '../repositories/interfaces/task.interface.repository';

@injectable()
export class TaskService {
  constructor(
    @inject('ITaskRepository') private repository: ITaskRepository
  ) {}

  createTask(data: Partial<ITask>, userId: string) {
    return this.repository.create({ ...data, owner: userId });
  }

  getTasks(userId: string) {
    return this.repository.findAllByOwner(userId);
  }

  getTaskById(id: string, userId: string) {
    return this.repository.findByIdAndOwner(id, userId);
  }

  updateTask(id: string, userId: string, updates: Partial<ITask>) {
    return this.repository.updateById(id, userId, updates);
  }

  deleteTask(id: string, userId: string) {
    return this.repository.deleteById(id, userId);
  }
}
