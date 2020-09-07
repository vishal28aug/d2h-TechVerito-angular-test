import { Component, OnInit, Input } from '@angular/core';

var $;

@Component({
  selector: 'show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {

  @Input() message; //Message to show
  constructor() { }

  ngOnInit(): void {
    //$().alert('dispose')
  }

}
