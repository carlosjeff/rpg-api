import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {

  private httpAdapter: AbstractHttpAdapter

  constructor(adpterHost: HttpAdapterHost) {
    this.httpAdapter = adpterHost.httpAdapter;
  }


  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const { status, body } = exception instanceof HttpException ?
      {
        status: exception.getStatus(),
        body: exception.getResponse()
      } : 
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        body:{
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          timestamp: new Date().toISOString(),
          message: exception.message,
          path: request.path
        }
      };

     

    this.httpAdapter.reply(response,body, status)

    // const status =
    //   exception instanceof HttpException
    //     ? exception.getStatus()
    //     : HttpStatus.INTERNAL_SERVER_ERROR;

    // response.status(status).json({
    //   statusCode: status,
    //   timestamp: new Date().toISOString(),
    //   path: request.url,
    // });
  }
}
