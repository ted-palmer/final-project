import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service'
import { Listing } from '../models/listing.model'
import { ListingService } from '../services/listing.service'


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  listing: Listing

  constructor(private http: HttpClient, private authService: AuthService, private listingService: ListingService) { }


  setUser(){
    this.listing = this.listingService.getDetailListing();
  }


  updateBooking(changeBooking: Booking){
    return this.http.post('http://localhost:5000/api/bookings/update', changeBooking)
  }

  getBookingsPending(){
    return this.http.get('http://localhost:5000/api/bookings/listing/' + this.listing.id+ '/pending');

  }

  getBookingsAccepted(){
    return this.http.get('http://localhost:5000/api/bookings/listing/' + this.listing.id + '/accepted');

  }

  getBookingsRejected(){
    return this.http.get('http://localhost:5000/api/bookings/listing/' + this.listing.id + '/rejected');

  }

}
