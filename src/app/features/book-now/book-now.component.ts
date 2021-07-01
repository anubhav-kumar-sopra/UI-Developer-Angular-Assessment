import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  public first_name: String;
  public last_name: String;
  public email: String;
  public phone: String;
  public flight: any;
  subscription: Subscription;

  constructor(private router: Router, private messageService: MessageService) {
    
  }

  ngOnInit() {
    this.messageService.subjectData$.subscribe(data => {
      this.flight = data
      console.log(this.flight)
    }, err => {

    })
  }
  onSubmit(formData: NgForm): void {
    console.log(formData)
    this.router.navigate(['thank-you'])

  }

}
