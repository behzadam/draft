import { ResponseMeta } from './response-meta';

export const MESSAGE_SUCCESS =
  'The operation has been done successfully.';
export const MESSAGE_FAILURE = 'Invalid operation!';

/**
 * Result class to simplify the response handling.
 */
export class Result<TData = unknown> {
  success: boolean;
  message: string | null;
  errors: string[];
  data: TData | null;
  meta: ResponseMeta;

  private constructor({
    success = false,
    message = null,
    errors = [],
    data = null,
    meta = null
  }: Partial<{
    success: boolean;
    message: string | null;
    errors: string[];
    data: TData | null;
    meta: ResponseMeta;
  }>) {
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

  /**
   * Returns failure result.
   * @param options
   * @returns Result
   *
   * @example
   * Here's a simple example:
   * ```ts
   * const result = Result.failure();
   * console.log(result)
   * // Prints:
   * {
   *    errors: [],
   *    message: MESSAGE_FAILURE,
   *    success: false,
   *    data: null,
   *    meta: null
   * }
   *```
   */
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

  /**
   * Returns success result.
   * @param options Optional params
   * @returns Result
   *
   * @example
   * Here's a simple example:
   *
   * ```ts
   * const result = Result.success({ data: [{ id: 1}] });
   * console.log(result);
   * // Prints:
   * {
   *  errors: [],
   *  message: MESSAGE_SUCCESS,
   *  success: true,
   *  data: [{ id: 1}],
   *  meta: null
   * }
   * ```
   */
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
