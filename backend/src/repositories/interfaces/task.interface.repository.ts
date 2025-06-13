import { ITask } from "../../interfaces/task.interface";

export interface ITaskRepository {
  create(task: Partial<ITask>): Promise<ITask>;
  findAllByOwner(ownerId: string): Promise<ITask[]>;
  findByIdAndOwner(id: string, ownerId: string): Promise<ITask | null>;
  updateById(id: string, ownerId: string, updates: Partial<ITask>): Promise<ITask | null>;
  deleteById(id: string, ownerId: string): Promise<ITask | null>;
}
