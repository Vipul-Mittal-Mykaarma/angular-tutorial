import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchPipePipe implements PipeTransform {

  transform(inputArray: Array<string>, searchTerm: string): Array<string> {
    var output : Array<string> = [];
    
    for(let inp of inputArray){
      if(inp.includes(searchTerm)){
        output.push(inp);
      }
    }
    return output;
  }

}
