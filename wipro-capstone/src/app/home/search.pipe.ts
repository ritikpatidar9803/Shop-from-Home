import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Categories/product';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(languages: Product[], searchInput: string): any[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return languages.filter(
           x =>x.pname.toLowerCase().includes(searchInput)
       )
     }
}