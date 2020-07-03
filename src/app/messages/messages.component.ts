import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../services/apidata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  showIndividualMessage: Boolean;
  messages;
  individualMessages;

  constructor(private apiservice: ApidataService, private router:Router) { }

  ngOnInit(): void {
    this.apiservice.get('sms/distinct').subscribe(
      (data) => {
        this.messages = data.details;
        console.log(this.messages)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  getIndividualTexts(phone_number): void{
   this.router.navigate([`/messages/${phone_number}`]);
  }

}
