import { AppError } from './app.error';

export class UnknownError extends AppError {
  constructor(error?: any, resourceName?: string) {
    super(error, resourceName);

    this.description = 'Some unknown error happened. Please try later ...';
  }
}
