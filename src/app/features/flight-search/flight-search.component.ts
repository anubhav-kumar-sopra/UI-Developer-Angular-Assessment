import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  public keyword = 'city'
  public faCoffee = faCoffee;
  public cities = [];
  public fromCity: Object;
  public toCity: Object;
  public travelDate: String;
  public returnDate: String;
  constructor(private dataService: FetchDataService, private router: Router) { }

  ngOnInit(): void {

  }


  onFocused(e) {
    console.log(e)
  }

  selectEvent(e) {

  }

  onChangeSearch(searchQuery = '') {
    this.getCities(searchQuery)
  }

  getCities(query: String = '') {
    this.dataService.getCities(query).subscribe(data => {
      this.cities = data
    },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Completed flight Search");
      }

    )
  }

  onSubmit(formData: NgForm) {
    const params: any = {}
    params.fromCity = formData.controls['fromCity'].value.city
    params.toCity = formData.controls['toCity'].value.city
    params.travelDate = formData.controls['travelDate'].value
    params.returnDate = formData.controls['returnDate'].value
    this.router.navigate(["search-result"], { queryParams: params })
  }
}
