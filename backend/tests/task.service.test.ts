import { TaskService } from '../src/services/task.service';
import { Task } from '../src/models/task.model';

jest.mock('../src/models/task.model');

describe('TaskService', () => {
  const taskService = new TaskService();

  it('should call Task.create with user ID', async () => {
    const mockCreate = jest.spyOn(Task, 'create').mockResolvedValue({ title: 'test' } as any);
    const result = await taskService.createTask({ title: 'test' }, 'user123');
    expect(mockCreate).toHaveBeenCalledWith({ title: 'test', owner: 'user123' });
    expect(result.title).toBe('test');
  });
});
