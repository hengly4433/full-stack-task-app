import { injectable, inject } from 'tsyringe';
import jwt from 'jsonwebtoken';
import { IUserRepository } from '../repositories/interfaces/user.interface.repository';

@injectable()
export class UserService {
  constructor(
    @inject('IUserRepository') private repository: IUserRepository
  ) {}

  async register(name: string, email: string, password: string): Promise<string> {
    const existing = await this.repository.findByEmail(email);
    if (existing) throw new Error('User already exists');
    const user = await this.repository.create({ name, email, password });
    return this.generateToken(user._id);
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.repository.findByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }
    return this.generateToken(user._id);
  }

  private generateToken(id: string): string {
    return jwt.sign({ id }, process.env.JWT_SECRET!, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  }
}
