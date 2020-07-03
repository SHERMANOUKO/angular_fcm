import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApidataService } from '../services/apidata.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MessagingService } from '../services/messaging.service';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent implements OnInit {
  individualMessages: Observable<[]>;
  phone_number;

  constructor(
    private route:ActivatedRoute, 
    private apiservice: ApidataService,
    private messaging: MessagingService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.phone_number = params.get('phone_number');
        this.getIndividualTexts(this.phone_number);
        this.getNotificationStatus()
      }
    )
  }
  
  getNotificationStatus(): void{
    this.messaging.currentMessage.subscribe(
      (data) =>{
        console.log(data)
        if(data){
          this.ngZone.run( () => {this.getIndividualTexts(data.data.phone_number)});
        }
      }
    )
  }
  

  getIndividualTexts(phone_number): void{

    let url = encodeURIComponent(phone_number)
    this.apiservice.get(`sms/messages/filter?phone_number=${url}`).subscribe(
      (data) => {
        this.individualMessages = data.details;
        console.log(this.individualMessages)
        // sessionStorage.setItem('current_phone', phone_number)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  sendMessage(phone_number, text){
    let message_data = {
      sender: "40578",
      receiver:phone_number,
      sender_phone: "40578",
      receiver_phone: phone_number,
      message: text,
      member_phone: phone_number
    }

    this.apiservice.post(message_data,'sms/messages/').subscribe(
      (data) => {
        this.getIndividualTexts(phone_number)
      },
      (err) => {
        alert('errrrrooorrr')
      }
    )
  }

}
