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
  hostId: number;
  newListing: Listing
  editListing: Listing;
  deletedId: string;

  constructor(private http: HttpClient) { }


  getListings(){
    return this.http.get('http://localhost:5000/api/listings');
  }

  getListingById(){
    return this.http.get('http://localhost:5000/api/listings/' + this.hostId);

  }

  public setHostId(id: number){
    this.hostId = id;
  }

  public getHostId() {
    return this.hostId;
  }

  public createListing(newListing){
    return this.http.post('http://localhost:5000/api/listings/add', newListing);
  }

  public updateListing(editListing){
    return this.http.post('http://localhost:5000/api/listings/update', editListing);
  }

  public deleteListing(deleteId) {
    console.log("got here");
    return this.http.delete('http://localhost:5000/api/listings/delete/' + deleteId);
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
