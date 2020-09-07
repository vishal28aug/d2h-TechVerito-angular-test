import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class D2hDetailsService {

  currentAccountBalance = 100; // Default account balance
  isShowCurrentBalance: Boolean = false; //To open or close the current balance screen
  isShowRechargeAccount: Boolean = false; //To open or close the Recharge account screen
  isShowSubscribePack: Boolean = false; //To open or close the Subscribe pack screen
  isShowSubscribeChannel: Boolean = false; //To open or close the Add Channels screen
  isShowSubscribeService: Boolean = false; //To open or close the Special services screen
  isShowCurrentSubscriptions: Boolean = false; //To open or close the View current subscription screen

  private messageListener = new Subject<boolean>();

  /**
 * Default current subscribed details
 * @memberof D2hDetailsService
 */
  currentSubscribedDetails = {
    pack: '',
    channel: [],
    service: [],
    validity: '',
  };

  /**
 * Default available services
 * @memberof D2hDetailsService
 */
  availableServices = [
    { id: 1, name: 'Learn english', price: 200 },
    { id: 2, name: 'Learn cooking', price: 100 },
  ]

  /**
 * Default available packs with channels
 * @memberof D2hDetailsService
 */
  packsAndChannelsDetails = [
    {
      name: 'Gold',
      price: 100,
      channels: [
        { id: 1, name: 'Zee' },
        { id: 2, name: 'Sony' },
        { id: 3, name: 'Star Plus' },
        { id: 4, name: 'Discovery' },
        { id: 5, name: 'NatGeo' },
      ]
    },
    {
      name: 'Silver',
      price: 50,
      channels: [
        { id: 1, name: 'Zee', price: 10 },
        { id: 2, name: 'Sony', price: 15 },
        { id: 3, name: 'Star Plus', price: 20 },
      ]
    }
  ];

  /**
   * Default available channels
   * @memberof D2hDetailsService
   */
  availableChannels = [
    { id: 1, name: 'Zee', price: 10 },
    { id: 2, name: 'Sony', price: 15 },
    { id: 3, name: 'Star Plus', price: 20 },
    { id: 4, name: 'Discovery', price: 10 },
    { id: 5, name: 'NatGeo', price: 20 },
  ];

  /**
  * Default user details
  * @memberof D2hDetailsService
  */
  userDetails = {
    userName: 'vishal',
    email: 'vishalsharma25sept@gmail.com',
    mobile: 8149574854
  }

  /**
   * Update the current account balance
   * @param {*} rechargeAmount
   * @memberof D2hDetailsService
   */
  rechargeAccount(rechargeAmount) {
    try {
      this.currentAccountBalance = +this.currentAccountBalance + +rechargeAmount;
      this.messageListener.next(true);
      console.log("Recharge Amount", this.currentAccountBalance);
      //closing window in 2 seconds
      setTimeout(() => {
        this.isShowRechargeAccount = false;
      }, 2000);
    }
    catch (err) {
      console.log("Error in 'rechargeAccount'", err.stack);
    }
  }

  /**
   * subscribe the selected pack and reduce the amount from current account balance
   * @param {*} pack
   * @param {*} month
   * @memberof D2hDetailsService
   */
  subscribePack(pack, month) {
    try {
      let packName = pack === 'G' ? 'Gold' : 'Silver';
      let selectedPack = this.packsAndChannelsDetails.filter(x => x.name === packName);
      if (selectedPack && (selectedPack[0].price * month) <= this.currentAccountBalance) {
        if (month >= 3) {
          let totalPrice = +selectedPack[0].price * month;
          let discountedPrice = totalPrice - ((10 / 100) * totalPrice); //10% off
          this.currentAccountBalance = this.currentAccountBalance - discountedPrice;
        } else {
          this.currentAccountBalance = +this.currentAccountBalance - (+selectedPack[0].price * month);
        }
        this.currentSubscribedDetails.pack = packName;
        this.currentSubscribedDetails.validity = month;
        this.messageListener.next(true);
        console.log("Subscribed pack", this.currentSubscribedDetails.pack);
        //closing window in 2 seconds
        setTimeout(() => {
          this.isShowSubscribePack = false;
        }, 2000);
      }
    }
    catch (err) {
      console.log("Error in 'subscribePack'", err.stack);
    }
  }

  /**
   * subscribe the selected channel and reduce the amount from current account balance
   * @param {*} channel
   * @memberof D2hDetailsService
   */
  subscribeChannel(channel) {
    try {
      let selectedChannel = this.availableChannels.filter(x => x.name === channel);
      if (selectedChannel && selectedChannel[0].price <= this.currentAccountBalance) {
        this.currentAccountBalance = +this.currentAccountBalance - +selectedChannel[0].price;
        this.currentSubscribedDetails.channel.push(selectedChannel[0].name);
        this.messageListener.next(true);
        console.log("Subscribed Channel", this.currentSubscribedDetails.channel);
        //closing window in 2 seconds
        setTimeout(() => {
          this.isShowSubscribeChannel = false;
        }, 2000);

      }
    }
    catch (err) {
      console.log("Error in 'subscribeChannel'", err.stack);
    }
  }

  /**
  * subscribe the selected service and reduce the amount from current account balance
   * @param {*} service
   * @memberof D2hDetailsService
   */
  subscribeService(service) {
    try {
      let selectedService = this.availableServices.filter(x => x.name === service);
      if (selectedService && selectedService[0].price <= this.currentAccountBalance) {
        this.currentAccountBalance = +this.currentAccountBalance - +selectedService[0].price;
        this.currentSubscribedDetails.service.push(selectedService[0].name);
        this.messageListener.next(true);
        console.log("Subscribed Service", this.currentSubscribedDetails.service);
        //closing window in 2 seconds
        setTimeout(() => {
          this.isShowSubscribeService = false;
        }, 2000);
      }
    }
    catch (err) {
      console.log("Error in 'subscribeService'", err.stack);
    }

  }

  /**
   * return true once the action is completed
   * @returns
   * @memberof D2hDetailsService
   */
  getMessageListener() {
    return this.messageListener.asObservable();
  }


}
