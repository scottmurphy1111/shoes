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

  onFilterChange(filter: any) {
    if (filter.event.checked === true) {
      this.filterArray = [...this.filterArray, filter.filter];
    } else {
      this.filterArray = this.filterArray.filter(val => filter.filter !== val);
    }

    this.shoesService.currentFilters$.next(this.filterArray);
  }
}
