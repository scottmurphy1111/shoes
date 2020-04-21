import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShoesService } from './shoes.service';
import { FilterItem, FilterType, FilterGroup } from './filter';
import { Shoe } from './shoe';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filterArray = [];

  constructor(
    private shoesService: ShoesService
  ) {}

  ngOnInit(): void {
  }

  onFilterChange(clickedFilter: any) {
    return clickedFilter.type === 'types' ? this.filterTypes(clickedFilter) : this.filterNonTypes(clickedFilter);
  }

  filterTypes(filter: any) {
    this.filterArray = this.filterArray.filter(val => {
      return val.type !== 'types';
    });
    this.filterArray = [...this.filterArray, {type: filter.type, value: filter.filter.value}];
    this.shoesService.currentFilters$.next(this.filterArray);
  }

  filterNonTypes(filter: any) {
    if (filter.event.checked === true) {
      this.filterArray = [...this.filterArray, {type: filter.type, value: filter.filter.value}];
    } else {
      this.filterArray = this.filterArray.filter(val => {
        return filter.filter.value !== val.value;
      });
    }
    this.shoesService.currentFilters$.next(this.filterArray);
  }
}
