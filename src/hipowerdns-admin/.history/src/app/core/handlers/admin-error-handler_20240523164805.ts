import { ErrorHandler, inject } from "@angular/core";
import { LoggingService } from "@app/services/logging.service";

export class AdminErrorHandler implements ErrorHandler
{
    handleError(error: any): void {
        console.log('*******************************************************');
        console.log(`Custom error handler, handle at ${ new Date()}`);
        console.log(error);
        console.log('');

        inject(LoggingService).LogError(JSON.stringify(error));
    }
}