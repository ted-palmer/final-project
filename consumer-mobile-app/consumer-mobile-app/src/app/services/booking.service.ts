import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }



  getBookingsPending(){
    return this.http.get('http://localhost:5000/api/bookings/');

  }

  getBookingsAccepted(){
    return this.http.get('http://localhost:5000/api/bookings/');

  }

  
  getBookingsRejected(){
    return this.http.get('http://localhost:5000/api/bookings/');

  }



}
