import { Injectable } from '@angular/core';
// import { shoes } from './data/shoes';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { Shoe } from './shoe';
import { HttpClient } from '@angular/common/http';
import { tap, map, startWith } from 'rxjs/operators';
import { FilterData } from './filters';
import { FilterItem } from './filter';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  shoesArray = [];
  currentFilters$ = new BehaviorSubject<string[]>([]);
  currentShoes$ = new BehaviorSubject<Shoe[]>(this.shoesArray);

  constructor(private http: HttpClient) {}

  private shoesUrl = 'data/shoes';
  filters = FilterData;
  getShoes() {
    return this.http.get<Shoe[]>(this.shoesUrl).pipe(
      tap(val => {
        console.log('val', val);
        return this.shoesArray.push(val);
      })
    );
  }



  // allFilters$ = combineLatest(this.typeFilters$, this.colorFilters$, this.brandFilters$, this.priceFilters$);
    // switch (filter.type) {
    //   case 'types':
    //     this.typeFilters$.next(filter.event.checked);
    //     console.log('filter filter', filter.filter);
    //     console.log('type f$', this.typeFilters$);
    //     break;
    //   case 'colors':
    //     console.log('is colors');
    //     break;
    //   case 'brands':
    //     console.log('is brands');
    //     break;
    //   case 'prices':
    //     console.log('is prices');
    //     break;

    //   default:
    //     break;
    // }


  getFilteredShoes(shoes: Shoe[], filters: string[]): Shoe[] {
    console.log('shoes', shoes);
    console.log('filters', filters);
    return shoes.filter((shoe: Shoe) => {
      return this.performFilters(shoe, filters);
    });
  }

  performFilters(shoe: Shoe, filters: string[]): Shoe[] {
    return filters.map<Shoe>(filter => {
      if (shoe.type === filter || shoe.brand === filter || shoe.price) {
        return shoe;
      } else {
        return null;
      }
    });
  }
}
