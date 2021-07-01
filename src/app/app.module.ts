import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AppComponent } from './app.component';

import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { BookNowComponent } from './features/book-now/book-now.component';

import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './features/search-result/search-result.component';
import { RouterModule } from '@angular/router';
import { MessageService } from './services/message.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    NotFound404Component,
    BookNowComponent,
    ThankYouComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AutocompleteLibModule,
    FontAwesomeModule,
    RouterModule,
    NgxPaginationModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
