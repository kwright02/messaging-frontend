import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../post';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {

    if (!array || array === undefined || array.length === 0) {
      return null;
    }

    array.sort((a: any, b: any) => {
      if (a.date.getTime() < b.date.getTime()) {
        return -1;
      } else if (a.date.getTime() > b.date.getTime()) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
