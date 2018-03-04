import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wc',
})
export class WordcountPipe implements PipeTransform {

  transform(value: string, args) {

    let newValue: number = 0;

    if (value == "")
    {
      newValue = null;
    }
    else{
    let gaps = value.split(" ").length;
    for(let i = 0; i < gaps; i++){
      newValue += 1;
    }
    return newValue;
  }}
}
