import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { BookNowComponent } from './features/book-now/book-now.component';
import { SearchResultComponent } from './features/search-result/search-result.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: FlightSearchComponent
  },
  {
    path: 'search-result',
    component: SearchResultComponent
  },
  {
    path: 'book-now',
    component: BookNowComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
  {
    path:'**',
    component:NotFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
