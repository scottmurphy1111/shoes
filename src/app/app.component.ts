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
  shoes: any;

  constructor(
    private shoesService: ShoesService
  ) {}

  ngOnInit(): void {
    this.shoes = this.getShoes();
    console.log('app ahoseehoes', this.shoes);
  }

  getShoes() {
    this.shoesService.getShoes().subscribe(
      val => console.log('app vall', val)
    );
  }

  onFilterChange(filter: any) {
    console.log('filter', filter);
    if (filter.event.checked === true) {
      this.filterArray.push(filter.filter);
    } else {
      const index = this.filterArray.indexOf(filter.filter);
      this.filterArray.splice(index, 1);
    }

    this.shoesService.currentFilters$.next(this.filterArray);
    // tslint:disable-next-line: max-line-length
    this.shoesService.currentShoes$.next(this.shoesService.getFilteredShoes(this.shoesService.shoesArray, this.shoesService.currentFilters$.getValue()));
  }
}
