import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { UserDatailsComponent } from './components/user-datails/user-datails.component';
import { AvailableCatalogComponent } from './components/available-catalog/available-catalog.component';
import { CurrentBalanceComponent } from './components/current-balance/current-balance.component';
import { RechargeAccountComponent } from './components/recharge-account/recharge-account.component';
import { SubscribePackComponent } from './components/subscribe-pack/subscribe-pack.component';
import { AddChannelsComponent } from './components/add-channels/add-channels.component';
import { SpecialServicesComponent } from './components/special-services/special-services.component';
import { ViewCurrentSubscriptionComponent } from './components/view-current-subscription/view-current-subscription.component';
import { ClickOutsideDirective } from './directives/click-outsidde.directive';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ShowMessageComponent } from './components/show-message/show-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UserDatailsComponent,
    AvailableCatalogComponent,
    CurrentBalanceComponent,
    RechargeAccountComponent,
    SubscribePackComponent,
    AddChannelsComponent,
    SpecialServicesComponent,
    ViewCurrentSubscriptionComponent,
    ClickOutsideDirective,
    AutocompleteComponent,
    ShowMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
