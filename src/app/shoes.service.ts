import { Injectable } from '@angular/core';
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
        map((shoe: Shoe[]) => {
          if (filters && filters.length) {
            return this.performFilters(shoe, filters);
          } else {
            return shoe;
          }
        })
      );
    })
  );

  performFilters(shoes: Shoe[], filters: any[]): any {
    let allMapped: Shoe[] = [];
    let typesMapped: any[] = [];
    let brandsMapped: any[] = [];
    let colorsMapped: Shoe[] = [];
    let pricesMapped: Shoe[] = [];

    filters.map(f => {
      return shoes.filter((shoe) => {
        switch (f.type) {
          case 'types':
            if (f.value === 'all') {
              typesMapped = [...typesMapped, shoe];
            } else if (shoe.type === f.value) {
              typesMapped = [...typesMapped,  shoe];
            }
            break;

          case 'brands':
            // console.log('f', f);

            if (shoe.brand === f.value) {
              brandsMapped = [...brandsMapped, shoe];
              console.log('brands map', brandsMapped);
            }
            break;

          default:
            break;
        }
      });
    });

    allMapped = typesMapped.filter(val => {
      console.log('val', val);
      return brandsMapped.includes(val);
    });

    return allMapped;




  }
}
