import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing.model';
import { Booking } from '../../models/booking'
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user.model'
import { BookingService } from '../../services/booking.service'


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  displayListing: Listing;
  booking: Booking = new Booking();
  user: User;

  constructor(private navCtrl: NavController, private listingService: ListingService, private authService: AuthService, private bookingService: BookingService) { }

  ngOnInit() {
    this.displayListing = this.listingService.getDetailListing();
    this.user = this.authService.getUser();
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

  goToBookingSuccess(){
    this.navCtrl.navigateForward('booking-success')
  }


  addBooking() {
    this.booking.listingId = this.displayListing.id;
    this.booking.hostId = this.displayListing.hostId;
    this.booking.userId = this.user.id;
    console.log(this.booking);
    //this.bookingService.invokeBookingCallback(this.booking);
    this.listingService.addBooking(this.booking).subscribe()
    this.goToBookingSuccess();
  }



}
