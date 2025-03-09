import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arryOfObject:any[],text:string): any[] {
    return arryOfObject.filter((itme)=>itme.title.toLowerCase().includes(text.toLowerCase()));
  }

}
