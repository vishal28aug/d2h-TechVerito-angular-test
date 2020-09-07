import { Component, OnInit } from '@angular/core';
import { D2hDetailsService } from '../../services/d2h-details.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShowMessage = false; //To show message alert

  constructor(public _d2hDetailsService: D2hDetailsService) { }

  ngOnInit(): void {
    this._d2hDetailsService.getMessageListener().subscribe(isShowMessage => {
      this.isShowMessage = isShowMessage;
    })
  }

}
