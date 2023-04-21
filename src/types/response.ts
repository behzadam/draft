import { ResponseMeta } from './response-meta';

export type Response<TData = unknown> = {
  success: boolean;
  message?: string;
  errors: string[];
  data?: TData;
  meta: ResponseMeta;
};
