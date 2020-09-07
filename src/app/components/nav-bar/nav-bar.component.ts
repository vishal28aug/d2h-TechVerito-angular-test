import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isShowHomeLink: Boolean = false; // To hide the 'Home' link from navbar on home page

  constructor(private _router: Router) { }


  ngOnInit(): void {
    //subscribing to route event to check which is active route
    this._router.events.subscribe(() => {
      this.isShowHomeLink = this._router.url != '/home';
    });

  }

}
