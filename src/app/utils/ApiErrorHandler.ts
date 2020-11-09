/**
 * NPM packages
 */
import { Context } from 'koa';
/**
 * Constants
 */
import HttpConstants from '../constant/HttpConstants';
import logger from '../../logger';

export class ApiErrorHandler {
  constructor() { }

  errorHandler(err: any, ctx: Context) {
    logger.error('ERRROR : ', err);
    /**
     * Error handling for validations : starts
     */
    if (err && err.isJoi) {
      const body = {
        error: `${err.name ? err.name : ''}: `
      };
      ctx.status = HttpConstants.HTTP_BAD_REQUEST;
      if (err.details && err.details.length) {
        err.details.forEach(element => {
          if (element.message) {
            body.error += element.message.replace(/"/g, '');
          }
        });
      }
      body.error = body.error.replace('ValidationError:', '').trim();
      ctx.body = body;
    } else {
      ctx.status = err.statusCode ? err.statusCode : HttpConstants.HTTP_INTERNAL_SERVER_ERROR
      ctx.body = {
        error: (err.error) ? ((err.error.error && err.error.error.message) ? err.error.error.message : err.error.error) : err.message
      }
    }
    /**
     * Error handling for validations : ends
     */
  }
};

const apiErrorHandler: ApiErrorHandler = new ApiErrorHandler();

export default apiErrorHandler;