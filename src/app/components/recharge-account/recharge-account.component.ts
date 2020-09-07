import { Component, OnInit } from '@angular/core';
import { D2hDetailsService } from '../../services/d2h-details.service';
@Component({
  selector: 'recharge-account',
  templateUrl: './recharge-account.component.html',
  styleUrls: ['./recharge-account.component.css']
})
export class RechargeAccountComponent implements OnInit {

  rechargeAmount: Number; //holds the rechargeAmount

  isValid = true; //To show errors.

  isShowMessage = false; // to show message

  constructor(public _d2hDetailsService: D2hDetailsService) { }

  ngOnInit() {
    this._d2hDetailsService.getMessageListener().subscribe(isShowMessage => {
      this.isShowMessage = isShowMessage;
    })
  }

  onFocus() {
    this.isValid = true; //hide error on focus
  }

  //checking if recharge amount is valid then calling rechargeAccount() else showing error
  rechargeAccount() {
    this.isValid = true;
    this.rechargeAmount ? this._d2hDetailsService.rechargeAccount(this.rechargeAmount) : this.isValid = false;
  }

}
