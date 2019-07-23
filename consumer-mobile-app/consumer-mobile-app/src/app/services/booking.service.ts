import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service'


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  user: User;
 // addBookingCallback: Function;

  constructor(private http: HttpClient, private authService: AuthService) { }


  setUser(){
    this.user = this.authService.getUser();
  }

  getBookingsPending(){
    return this.http.get('http://localhost:5000/api/bookings/user/' + this.user.id+ '/pending');

  }

  getBookingsAccepted(){
    return this.http.get('http://localhost:5000/api/bookings/user/' + this.user.id + '/accepted');

  }

  getBookingsRejected(){
    return this.http.get('http://localhost:5000/api/bookings/user/' + this.user.id + '/rejected');

  }

  // setBookingCallback(addBooking: Function){
  //   this.addBookingCallback = addBooking;
  // }

  // invokeBookingCallback(booking: Booking) {
  //   this.addBookingCallback(booking);
  // }



}
