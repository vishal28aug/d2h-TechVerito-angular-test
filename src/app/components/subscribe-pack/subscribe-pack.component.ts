import { Component, OnInit } from '@angular/core';
import { D2hDetailsService } from '../../services/d2h-details.service';

@Component({
  selector: 'subscribe-pack',
  templateUrl: './subscribe-pack.component.html',
  styleUrls: ['./subscribe-pack.component.css']
})
export class SubscribePackComponent implements OnInit {

  selectedPack: String; //holds Pack value
  packMonth: String; //holds pack month value
  isValid = true; // to show errors
  packs = ['G', 'S']; //packs to show suggestion list
  isShowMessage = false; //to show message

  constructor(public _d2hDetailsService: D2hDetailsService) { }

  ngOnInit(){
    this._d2hDetailsService.getMessageListener().subscribe(isShowMessage =>{
      this.isShowMessage = isShowMessage;
    })
  }

  //Autocomplete event listener
  getTextValue(event) {
    this.selectedPack = event;
  }

  onFocus() {
    this.isValid = true; //hide error on focus
  }

  //checking if all values are valid then calling suscribePack() or else showing error
  subscribePack() {
    this.selectedPack && this.packMonth ? this._d2hDetailsService.subscribePack(this.selectedPack, this.packMonth) : this.isValid = false;
  }

}
