import { Component, OnInit } from '@angular/core';
import { D2hDetailsService } from '../../services/d2h-details.service';

@Component({
  selector: 'view-current-subscription',
  templateUrl: './view-current-subscription.component.html',
  styleUrls: ['./view-current-subscription.component.css']
})
export class ViewCurrentSubscriptionComponent implements OnInit {

  currentSubscription: any
  constructor(public _d2hDetailsService: D2hDetailsService) { }

  ngOnInit(): void {
    this.currentSubscription = this._d2hDetailsService.currentSubscribedDetails;
  }

}
