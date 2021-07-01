import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  query: Array<String> = []
  public flights: any;
  public page: Number = 1;
  public itemsPerPage: Number = 5;
  public totalCount: Number = 0;
  constructor(private activatedRoute: ActivatedRoute, private dataService: FetchDataService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      const params = data.params;
      this.query.push('_page=' + this.page)
      this.query.push('_limit=' + this.itemsPerPage)
      const fromCity = params.fromCity
      if (fromCity)
        this.query.push('fromCity_like=' + fromCity)

      const toCity = params.toCity
      if (toCity)
        this.query.push('toCity_like=' + toCity)

      const travelDate = params.travelDate
      if (travelDate)
        this.query.push('travelDate_gte=' + travelDate)
        this.query.push('travelDate_lte=' + travelDate)

      const returnDate = params.returnDate
      if (returnDate) {
        this.query.push('travelDate_gte=' + returnDate)
        this.query.push('travelDate_lte=' + returnDate)
        this.query.push('fromCity_like=' + toCity)
      }
    })
    
    this.searchFlights();

  }

  OnClickBookNow(flight) {
    this.messageService.sendFlightDetails(flight)
    this.router.navigate(['book-now', {}])
  }

  OnPageChange(page) {
    this.query[0]='_page=' + page
    this.searchFlights()
  }

  private searchFlights(){
    this.dataService.searchFlights(this.query.join('&')).subscribe(result => {
      this.totalCount = result.headers.get('X-Total-Count')
      this.flights = result.body
    }, err => {
      console.log("Err", err)
    },
      () => {
        console.log("completed")
      })
  }


}
