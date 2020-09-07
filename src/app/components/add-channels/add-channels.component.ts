import { Component, OnInit } from '@angular/core';
import { D2hDetailsService } from '../../services/d2h-details.service';


@Component({
  selector: 'add-channels',
  templateUrl: './add-channels.component.html',
  styleUrls: ['./add-channels.component.css']
})
export class AddChannelsComponent implements OnInit {

  selectedChannel: String;   //holds the channel value

  isValid = true; // to show errors

  channels = ['Zee', 'Sony', 'Star Plus', 'Discovery', 'NatGeo'];  //To show suggestions list

  isShowMessage = false; //To show message alert

  constructor(public _d2hDetailsService: D2hDetailsService) { }

  ngOnInit() {
    this._d2hDetailsService.getMessageListener().subscribe(isShowMessage => {
      this.isShowMessage = isShowMessage;
    })
  }

  //Autocomplete event listener
  getTextValue(event) {
    this.selectedChannel = event;
  }

  //checking if selectedChannel is Valid then calling subscribeChannel() else showing error
  subscribeChannel() {
    this.selectedChannel ? this._d2hDetailsService.subscribeChannel(this.selectedChannel) : this.isValid = false;
  }

}
