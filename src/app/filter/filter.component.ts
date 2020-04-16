import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterItem, FilterMap, FilterType } from '../filter';
import { ShoesService } from '../shoes.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();
  filterMap: FilterMap;
  filterType = FilterType;

  constructor(
    private shoesService: ShoesService
  ) { }

  ngOnInit() {
    this.filterMap = this.shoesService.filters;
    console.log('f map', this.filterMap);
  }

  onFilterChange(filter: FilterItem, type: FilterType, event: Event) {
    // console.log('filter change', filter, type, event);
    const filterObj = {
      filter,
      type,
      event: event.target
    };
    this.filterChange.emit(filterObj);
  }

}
