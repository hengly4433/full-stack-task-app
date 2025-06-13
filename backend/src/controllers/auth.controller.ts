import { Request, Response, NextFunction } from 'express';
import { injectable } from 'tsyringe';
import { UserService } from '../services/user.service';

@injectable()
export class AuthController {
  constructor(private userService: UserService) {}

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.userService.register(req.body.name, req.body.email, req.body.password);
      res.status(201).json({ token });
    } catch (err) {
      next(err);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await this.userService.login(req.body.email, req.body.password);
      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  };
}
