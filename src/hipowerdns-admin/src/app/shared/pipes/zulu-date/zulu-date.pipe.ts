import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ZuluDate',
  pure: true
})
export class ZuluDatePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): any {
    console.log('');    
    console.log(`Zulu DateTime format, value: ${value}`);    
    console.log('');
    
    return value.toLocaleString('yyyy-MM-ddTHH:mm:ss');
  }

}
