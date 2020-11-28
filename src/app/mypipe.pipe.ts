import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

 

  transform(value: Array<number>, ...args: String[]): String[] {

      let newArray:Array<string>=[];
      for(let i=0; i< value.length-1; i++){
        newArray.push(`${i} ${args} ${value[i]}`);
      }
     
      return newArray;

  } 

}
