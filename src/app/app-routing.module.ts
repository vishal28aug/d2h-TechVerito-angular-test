import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UserDatailsComponent} from './components/user-datails/user-datails.component';
import {AvailableCatalogComponent} from './components/available-catalog/available-catalog.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'update', component: UserDatailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: AvailableCatalogComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
