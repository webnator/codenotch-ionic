import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marea'
})
export class MareaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} mts`;
  }

}
