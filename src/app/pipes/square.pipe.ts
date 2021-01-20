import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'squearepipe'
})

export class SquearePipe implements PipeTransform{
  transform(num: number) {
    return num*num;
  }

}
