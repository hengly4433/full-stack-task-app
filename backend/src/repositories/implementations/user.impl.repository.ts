import { injectable } from 'tsyringe';
import { User } from '../../models/user.model';
import { IUserRepository } from '../interfaces/user.interface.repository';
import { IUser } from '../../interfaces/user.interface';


@injectable()
export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }

  async create(user: Partial<IUser>): Promise<IUser> {
    return User.create(user);
  }

  async findById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }
}
