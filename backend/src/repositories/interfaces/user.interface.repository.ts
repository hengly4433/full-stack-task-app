import { IUser } from "../../interfaces/user.interface";

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  create(user: Partial<IUser>): Promise<IUser>;
  findById(id: string): Promise<IUser | null>;
}
