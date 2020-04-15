import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
