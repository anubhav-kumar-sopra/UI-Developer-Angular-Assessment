import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private API_URL: String = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getCities(query: String): Observable<any> {
    return this.http.get(this.API_URL + 'city' + '?q=' + query)
  }
  searchFlights(query: String): Observable<any> {
    return this.http.get(this.API_URL + 'flight' + '?' + query,{observe: 'response'})
  }
}

