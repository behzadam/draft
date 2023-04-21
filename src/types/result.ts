import { Response } from './response';
import { ResponseMeta } from './response-meta';

export const MESSAGE_SUCCESS =
  'The operation has been done successfully.';
export const MESSAGE_FAILURE = 'Invalid operation!';

export class Result<TData = unknown> {
  success: boolean;
  message?: string;
  errors: string[];
  data?: TData;
  meta: ResponseMeta;

  private constructor({
    success = false,
    message,
    errors = [],
    data,
    meta = null
  }: Partial<Response<TData>> = {}) {
    if (!message) {
      message = success
        ? MESSAGE_SUCCESS
        : MESSAGE_FAILURE;
    }

    this.success = success;
    this.message = message;
    this.errors = errors;
    this.data = data;
    this.meta = meta;
  }

  static failure(
    options?: Partial<{
      message?: string;
      errors?: string[];
    }>
  ): Result<null> {
    return new Result({
      success: false,
      message: options?.message,
      errors: options?.errors,
      data: null,
      meta: null
    });
  }

  static success<TData>(options?: {
    data: TData;
    message?: string;
    meta?: ResponseMeta;
  }): Result<TData> {
    return new Result({
      success: true,
      message: options?.message,
      errors: [],
      data: options?.data,
      meta: options?.meta
    });
  }
}