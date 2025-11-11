import { ZodError } from 'zod';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Erro de validação',
      issues: err.errors,
    });
  }

  console.error(err); // log interno
  res.status(500).json({
    message: 'Erro interno do servidor',
  });
};