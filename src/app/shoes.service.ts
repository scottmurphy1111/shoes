import { Injectable } from '@angular/core';
// import { shoes } from './data/shoes';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { Shoe } from './shoe';
import { HttpClient } from '@angular/common/http';
import { tap, map, startWith, switchMap, filter, mergeMap, concatMap, flatMap } from 'rxjs/operators';
import { FilterData } from './filters';
import { FilterItem } from './filter';

@Injectable({
  providedIn: 'root',
})
export class ShoesService {
  shoesArray = [];
  filters = FilterData;
  currentFilters$ = new BehaviorSubject<string[]>([]);

  private shoesUrl = 'data/shoes';

  constructor(private http: HttpClient) {}

  combined = combineLatest(this.currentFilters$);

  currentShoes$ = this.combined.pipe(
    switchMap(([filters]) => {
      return this.http.get<Shoe[]>(this.shoesUrl).pipe(
        map((value: Shoe[]) => {
          if (filters && filters.length) {
            return this.performFilters(value, filters);
          } else {
            return value;
          }
        })
      );
    })
  );

  performFilters(shoes: Shoe[], filters: any[]): Shoe[] {
    let mapped = [];

    shoes.map((shoe: Shoe) => {
      filters.map(f => {
        if (shoe.type === f || shoe.brand === f) {
          // todo colors, prices
          mapped = [...mapped, shoe];
        }
      });
    });

    return mapped;
  }
}
