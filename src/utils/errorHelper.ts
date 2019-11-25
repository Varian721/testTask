import ErrnoException = NodeJS.ErrnoException;

class ProjectError extends Error {
  error?: ErrnoException;
  code: number = 500;

  constructor(type, message) {
    super(message);

    if (message instanceof ProjectError) return message;

    this.message = message;
    this.error = type;
    delete this.stack;
  }
}

function formaError(error) {
  return typeof error === 'string'
    ? error.replace(/\s/gm, '_').toLocaleLowerCase()
    : error;
}

export function serverError(err: any = '') {
  console.error(
    JSON.stringify({
      message: 'API error',
      data: { type: 'SERVER_ERROR', error: err, stack: new Error().stack },
    }),
  );
  const error = new ProjectError('SERVER_ERROR', formaError(err));
  error.code = 500;
  return error;
}

export function notFound(err: any = '') {
  console.error(
    JSON.stringify({
      message: 'API error',
      data: { type: 'NOT_FOUND', error: err, stack: new Error().stack },
    }),
  );
  const error = new ProjectError('NOT_FOUND', formaError(err));
  error.code = 404;
  return error;
}

export function badRequest(err: any = '') {
  console.error(
    JSON.stringify({
      message: 'API error',
      data: { type: 'BAD_REQUEST', error: err, stack: new Error().stack },
    }),
  );
  const error = new ProjectError('BAD_REQUEST', formaError(err));
  error.code = 400;
  return error;
}

export function forbidden(err: any = '') {
  console.error(
    JSON.stringify({
      message: 'API error',
      data: { type: 'FORBIDDEN', error: err, stack: new Error().stack },
    }),
  );
  const error = new ProjectError('FORBIDDEN', formaError(err));
  error.code = 403;
  return error;
}

export function conflict(err: any = '') {
  console.error(
    JSON.stringify({
      message: 'API error',
      data: { type: 'CONFLICT', error: err, stack: new Error().stack },
    }),
  );
  const error = new ProjectError('CONFLICT', formaError(err));
  error.code = 409;
  return error;
}
