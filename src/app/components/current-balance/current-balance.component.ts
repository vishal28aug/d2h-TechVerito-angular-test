import { Component, OnInit } from '@angular/core';
import {D2hDetailsService} from '../../services/d2h-details.service';


@Component({
  selector: 'current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.css']
})
export class CurrentBalanceComponent implements OnInit {

  constructor(public _d2hDetailsService:D2hDetailsService) { }

  ngOnInit(): void {
  }

}
