import { Component, OnInit } from '@angular/core';
import { Shoe } from './shoe';
import { Observable, of } from 'rxjs';
import { ShoesService } from './shoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentShoes$: Observable<Shoe[]> = of([]);

  constructor(
    private shoesService: ShoesService
  ) {}

  ngOnInit(): void {
    this.currentShoes$ = this.shoesService.allShoes$;
  }
}
