import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShoesService } from './shoes.service';
import { FilterItem, FilterType } from './filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // currentShoes$: Observable<Shoe[]> = of([]);
  allFilters$: Observable<any[]> = of([]);
  // typeFilters$: Observable<Filter[]> = of([]);
  // colorFilters$: Observable<Filter[]> = of([]);
  // brandFilters$: Observable<Filter[]> = of([]);
  // priceFilters$: Observable<Filter[]> = of([]);

  constructor(
    private shoesService: ShoesService
  ) {}

  ngOnInit(): void {
    this.allFilters$ = this.shoesService.allFilters$;
    // this.typeFilters$ = this.shoesService.typeFilters$;
    // this.colorFilters$ = this.shoesService.colorFilters$;
    // this.brandFilters$ = this.shoesService.brandFilters$;
    // this.priceFilters$ = this.shoesService.priceFilters$;
    console.log('all filters', this.allFilters$);
  }

  onFilterChange(filter: any) {
    this.shoesService.processFilters(filter);
  }
}
