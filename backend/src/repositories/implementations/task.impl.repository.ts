import { injectable } from 'tsyringe';
import { ITaskRepository } from '../interfaces/task.interface.repository';
import { ITask } from '../../interfaces/task.interface';
import { Task } from '../../models/task.model';


@injectable()
export class TaskRepository implements ITaskRepository {
  async create(task: Partial<ITask>): Promise<ITask> {
    return Task.create(task);
  }

  async findAllByOwner(ownerId: string): Promise<ITask[]> {
    return Task.find({ owner: ownerId });
  }

  async findByIdAndOwner(id: string, ownerId: string): Promise<ITask | null> {
    return Task.findOne({ _id: id, owner: ownerId });
  }

  async updateById(id: string, ownerId: string, updates: Partial<ITask>): Promise<ITask | null> {
    return Task.findOneAndUpdate({ _id: id, owner: ownerId }, updates, { new: true });
  }

  async deleteById(id: string, ownerId: string): Promise<ITask | null> {
    return Task.findOneAndDelete({ _id: id, owner: ownerId });
  }
}
