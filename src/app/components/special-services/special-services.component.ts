import { Component, OnInit } from '@angular/core';
import { D2hDetailsService } from '../../services/d2h-details.service';


@Component({
  selector: 'special-services',
  templateUrl: './special-services.component.html',
  styleUrls: ['./special-services.component.css']
})
export class SpecialServicesComponent implements OnInit{

  selectedService: String;  //holds the service value

  isValid = true; // to show errors

  services = ['Learn english', 'Learn cooking'];  //to show service suggestion list

  isShowMessage = false; //to show message

  constructor(public _d2hDetailsService: D2hDetailsService) { }

  ngOnInit(){
    this._d2hDetailsService.getMessageListener().subscribe(isShowMessage =>{
      this.isShowMessage = isShowMessage;
    })
  }

  //Autocomplete event listener
  getTextValue(event) {
    this.selectedService = event;
  }

  //checking if selectedService is Valid then calling subscribeService() else show error 
  subscribeService() {
    this.selectedService ? this._d2hDetailsService.subscribeService(this.selectedService) : this.isValid = false;
  }
}
