import { Component, OnInit } from '@angular/core';
import { ShoesService } from '../shoes.service';
import { Observable, of } from 'rxjs';
import { Shoe } from '../shoe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  currentShoes$: Observable<Shoe[]> = of([]);

  constructor(
    private shoesService: ShoesService
  ) { }

  ngOnInit() {
    this.currentShoes$ = this.shoesService.allShoes$;
  }

}
