import { Component, OnInit } from '@angular/core';
import { D2hDetailsService } from '../../services/d2h-details.service';

@Component({
  selector: 'app-user-datails',
  templateUrl: './user-datails.component.html',
  styleUrls: ['./user-datails.component.css']
})
export class UserDatailsComponent implements OnInit {

  userName; //holds username
  email; //holds email
  contactNumber; //holds contact number
  isValid: Boolean = true; //To show error

  constructor(public _d2hDetailsService: D2hDetailsService) { }

  ngOnInit(): void {
    let currentUserDetails = this._d2hDetailsService.userDetails;
    this.userName = currentUserDetails.userName;
    this.email = currentUserDetails.email;
    this.contactNumber = currentUserDetails.mobile;
  }

  updateUserDetails() {
    this.userName && this.email && this.contactNumber ? this._d2hDetailsService.userDetails = {
      userName: this.userName,
      email: this.email,
      mobile: this.contactNumber
    } : this.isValid = false;

    console.log("user details",this._d2hDetailsService.userDetails);
  }

}
