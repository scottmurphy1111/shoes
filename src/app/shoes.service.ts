import { Injectable } from '@angular/core';
// import { shoes } from './data/shoes';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Shoe } from './shoe';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { FilterData } from './filters';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  private shoesUrl = 'data/shoes';
  filters = FilterData;

  allFilters$ = new BehaviorSubject<any>([]);
  typeFilters$: Observable<any>;
  colorFilters$ = new BehaviorSubject<any>([]);
  brandFilters$ = new BehaviorSubject<any>([]);
  priceFilters$ = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  allShoes$ = this.http.get<Shoe[]>(this.shoesUrl).pipe(tap((data) => console.log('data', data)));

  processFilters(filter: any) {
    console.log('filter', filter);

    switch (filter.type) {
      case 'types':
        this.typeFilters$.pipe(
          map(val => console.log('val', val))
        );
        break;
      case 'colors':
        console.log('is colors');
        break;
      case 'brands':
        console.log('is brands');
        break;
      case 'prices':
        console.log('is prices');
        break;

      default:
        break;
    }
  }

  // filteredShoes$ = combineLatest(this.allShoes$, this.allFilters$);
}
