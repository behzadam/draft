import { posts } from '@/testing/mocks/data';
import { Pagination } from './pagination';
import { Response } from './response';
import {
  MESSAGE_FAILURE,
  MESSAGE_SUCCESS,
  Result
} from './result';

describe('Result', () => {
  describe('Result.success', () => {
    it('returns response with default success message', () => {
      const result = Result.success({ data: posts });
      expect(result).toEqual({
        errors: [],
        message: MESSAGE_SUCCESS,
        success: true,
        data: posts,
        meta: null
      } satisfies Response);
    });

    it('returns response with custom message', () => {
      const customMessage = 'custom message';
      const result = Result.success({
        data: posts,
        message: customMessage
      });
      expect(result).toEqual({
        errors: [],
        message: customMessage,
        success: true,
        data: posts,
        meta: null
      } satisfies Response);
    });

    it('returns response with null data', () => {
      const result = Result.success({ data: null });
      expect(result).toEqual({
        errors: [],
        message: MESSAGE_SUCCESS,
        success: true,
        data: null,
        meta: null
      } satisfies Response);
    });

    it('returns response with pagination meta data', () => {
      const pagination = new Pagination({
        itemCount: 1,
        page: 1,
        take: 10
      });
      const result = Result.success({
        data: posts,
        meta: pagination
      });
      console.log(result);
      expect(result).toEqual({
        errors: [],
        message: MESSAGE_SUCCESS,
        success: true,
        data: posts,
        meta: {
          page: pagination.page,
          take: pagination.take,
          itemCount: pagination.itemCount,
          pageCount: pagination.pageCount,
          hasNextPage: false,
          hasPreviousPage: false
        } satisfies Pagination
      } satisfies Response);
    });
  });

  describe('Result.failure', () => {
    it('returns response with default failure message', () => {
      const result = Result.failure();
      expect(result).toEqual({
        errors: [],
        message: MESSAGE_FAILURE,
        success: false,
        data: null,
        meta: null
      } satisfies Response);
    });

    it('returns response with custom failure message', () => {
      const customMessage = 'custom failure message';
      const result = Result.failure({
        message: customMessage
      });
      expect(result).toEqual({
        errors: [],
        message: customMessage,
        success: false,
        data: null,
        meta: null
      } satisfies Response);
    });

    it('returns response with array of errors', () => {
      const errors = [
        'email should be a valid email address',
        'name must not to be empty'
      ];
      const result = Result.failure({ errors });
      expect(result).toEqual({
        errors: errors,
        message: MESSAGE_FAILURE,
        success: false,
        data: null,
        meta: null
      } satisfies Response);
    });
  });
});
