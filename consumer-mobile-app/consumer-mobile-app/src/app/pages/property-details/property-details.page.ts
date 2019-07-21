import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing.model';
import { Booking } from '../../models/booking'


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  displayListing: Listing;
  booking: Booking = new Booking();

  constructor(private navCtrl: NavController, private listingService: ListingService) { }

  ngOnInit() {
    this.displayListing = this.listingService.getDetailListing();
  }

  
  goToUser(){
    this.navCtrl.navigateForward('user');
  }


  goToProperties(){
    this.navCtrl.navigateForward('properties');
  }

  goToBookings(){
    this.navCtrl.navigateForward('bookings');
  }


  addBooking() {
    this.booking.listingId = this.displayListing.id;
    this.booking.hostId = this.displayListing.hostId;
    console.log(this.booking);
    this.listingService.addBooking(this.booking).subscribe()
  }



}
