import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InitConfigService } from '@app/initializer/init-config.service';
import { LoggingType } from './types/loggin-type';
import { LoggingType } from '../../../.history/src/app/core/types/loggin-type_20240518135252';
import { Observable, of } from 'rxjs';
import { ApplicationError } from './errors';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(private http: HttpClient,
              private config: InitConfigService) { }

  LogInformation(entry: string): void {
    
  }

  LogWarning(entry: string): void {

  }

  LogError(entry: ApplicationError): void {

  }

  private logEntry(entry: string | ApplicationError, type:LoggingType): Observable<void> {
    const loggingUrl = this.config.logging;
    this.http
      .post(loggingUrl, entry,
        {
          headers: this.getLoggingHeader(type)
        }).subscribe();
    return of();
  }

  private getLoggingHeader(type: LoggingType): HttpHeaders {
    const loggingHeaders = new HttpHeaders();
    loggingHeaders.append('X-hiPowerAdmin-Logging', 'true');
    loggingHeaders.append('X-hiPowerAdmin-Loggin-Type', type);
    return loggingHeaders;
  }
}
