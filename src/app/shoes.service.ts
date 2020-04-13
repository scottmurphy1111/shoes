import { Injectable } from '@angular/core';
// import { shoes } from './data/shoes';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Shoe } from './shoe';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  private shoesUrl = 'data/shoes';

  filters$ = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) { }

  allShoes$ = this.http.get<Shoe[]>(this.shoesUrl)
    .pipe(
      tap(data => console.log('data', data))
    );

  filteredShoes$ = combineLatest(this.allShoes$, this.filters$);

}
