import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tm',
})
export class TimemodPipe implements PipeTransform {

  transform(value: string, args) {

      value= value.replace("T"," ");
      value= value.replace("Z"," ");

      return "Publication date : "+value;
  }
}
