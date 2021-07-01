import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new BehaviorSubject<any>({}); 
  subjectData$ = this.subject.asObservable()
  constructor() { }

  sendFlightDetails(flight){
   this.subject.next(flight)
  }
  
}
