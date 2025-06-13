import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { RequestHandler } from 'express';

export function validationMiddleware<T>(type: new () => T): RequestHandler {
  return async (req, res, next) => {
    const dto = plainToClass(type, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.map(e => ({
          property: e.property,
          constraints: e.constraints
        }))
      });
    }

    req.body = dto;
    next();
  };
}
