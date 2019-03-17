import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periodo'
})
export class PeriodoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value}seg`;
  }

}
