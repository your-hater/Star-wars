import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchName: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchName) {
      return items;
    }

    searchName = searchName.toLowerCase();

    return items.filter(elem => {
      return elem.name.toLowerCase().includes(searchName);
    });
  }

}
