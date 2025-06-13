import 'reflect-metadata';
import { container } from 'tsyringe';
import { UserService } from './services/user.service';
import { TaskService } from './services/task.service';
import { ITaskRepository } from './repositories/interfaces/task.interface.repository';
import { IUserRepository } from './repositories/interfaces/user.interface.repository';
import { TaskRepository } from './repositories/implementations/task.impl.repository';
import { UserRepository } from './repositories/implementations/user.impl.repository';


container.registerSingleton<UserService>(UserService);
container.registerSingleton<TaskService>(TaskService);
container.registerSingleton<ITaskRepository>('ITaskRepository', TaskRepository);
container.registerSingleton<IUserRepository>('IUserRepository', UserRepository);
