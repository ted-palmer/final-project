import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../models/listing.model';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  detailListing: Listing;
  newBooking: Booking;

  constructor(private http: HttpClient) { }


  getListings(){
    return this.http.get('http://localhost:5000/api/listings');
  }

  getListingById(){
    return this.http.get('http://localhost:5000/api/listings/:id');

  }

  public setDetailListing(detailListing: Listing) {
    this.detailListing = detailListing;
  }

  public getDetailListing(): Listing {
    return this.detailListing;
  }


  //add a booking
  addBooking(newBooking){
    return this.http.post('http://localhost:5000/api/bookings/add', newBooking);

  }
}
