import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationApiService } from './reservation-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditReservationComponent } from './reservation/add-edit-reservation/add-edit-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    AddEditReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
  ],
  providers: [ReservationApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
