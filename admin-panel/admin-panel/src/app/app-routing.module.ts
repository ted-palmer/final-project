import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component'
import { ListingsPageComponent } from './components/listings-page/listings-page.component'
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component'
import { BookingsPageComponent } from './components/bookings-page/bookings-page.component'


const routes: Routes = [
  { path: '', component: DashBoardComponent },
  { path: 'users', component: UserComponent },
  { path: 'listings-page', component: ListingsPageComponent },
  { path: 'service-providers', component: ServiceProvidersComponent },
  { path: 'bookings-page', component: BookingsPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
