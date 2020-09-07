import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'available-catalog',
  templateUrl: './available-catalog.component.html',
  styleUrls: ['./available-catalog.component.css']
})
export class AvailableCatalogComponent implements OnInit {

  /**
   * To hold the gold pack details
   * @memberof AvailableCatalogComponent
   */
  goldPacksDeatils;

  /**
   * To hold the silver pack details
   * @memberof AvailableCatalogComponent
   */
  silverPacksDetails;

  /**
   * Holds the total packs available
   * @memberof AvailableCatalogComponent
   */
  availablePacks = [];

  /**
   *  Holds the all available channels
   * @memberof AvailableCatalogComponent
   */
  availableChannels = [];

  /**
   *  Holds the all available service
   * @memberof AvailableCatalogComponent
   */
  availableServices = [];

  constructor() { }

  ngOnInit(): void {
    //Creating default gold packs
    this.goldPacksDeatils = {
      name: 'Gold',
      price: 100,
      channels: [
        { id: 1, name: 'Zee' },
        { id: 2, name: 'Sony' },
        { id: 3, name: 'Star Plus' },
        { id: 4, name: 'Discovery' },
        { id: 5, name: 'NatGeo' },
      ]
    };

    //Creating default silver packs
    this.silverPacksDetails = {
      name: 'Silver',
      price: 50,
      channels: [
        { id: 1, name: 'Zee' },
        { id: 2, name: 'Sony' },
        { id: 3, name: 'Star Plus' },
      ]
    };

    this.availablePacks = [this.goldPacksDeatils, this.silverPacksDetails];

    //Creating default channels details
    this.availableChannels = [
      { id: 1, name: 'Zee', price: 10 },
      { id: 2, name: 'Sony', price: 15 },
      { id: 3, name: 'Star Plus', price: 20 },
      {
        id: 4, name: 'Discovery', price: 10
      },
      { id: 5, name: 'NatGeo', price: 20 },
    ];

    //Creating default services details
    this.availableServices = [
      { id: 1, name: 'Learn english', price: 200 },
      { id: 2, name: 'Learn cooking', price: 100 },
    ]
  }

}
