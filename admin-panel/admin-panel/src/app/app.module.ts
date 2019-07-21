import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UserComponent } from './components/user/user.component';
import { ListingsPageComponent } from './components/listings-page/listings-page.component';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { BookingsPageComponent } from './components/bookings-page/bookings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UserComponent,
    ListingsPageComponent,
    ServiceProvidersComponent,
    BookingsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
