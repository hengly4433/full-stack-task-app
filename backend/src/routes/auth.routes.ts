import { Router } from 'express';
import { container } from 'tsyringe';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { RegisterUserDto, LoginUserDto } from '../dtos/user.dto';
import { AuthController } from '../controllers/auth.controller';

export class AuthRoutes {
  public router = Router();
  private controller: AuthController;

  constructor() {
    this.controller = container.resolve(AuthController);
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post('/register', validationMiddleware(RegisterUserDto), this.controller.register);
    this.router.post('/login', validationMiddleware(LoginUserDto), this.controller.login);
  }
}
