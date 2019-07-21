import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  detailListing: Listing;

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
}
