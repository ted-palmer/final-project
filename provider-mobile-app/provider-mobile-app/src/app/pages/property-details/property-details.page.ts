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

  public property: Listing = new Listing();
  public title: string;
  public location: string;
  public description: string;
  public numberOfPeople: number;
  public pricePerNight: number;

  constructor(private navCtrl: NavController, private listingService: ListingService, private authService: AuthService, private bookingService: BookingService) { }

  ngOnInit() {
    this.displayListing = this.listingService.getDetailListing();
    this.user = this.authService.getUser();
  }


  updateProperty(){
    this.property.title = this.title;
    this.property.location = this.location;
    this.property.description = this.description;
    this.property.numberOfPeople = this.numberOfPeople;
    this.property.pricePerNight = this.pricePerNight;
    this.property.hostId = this.listingService.getHostId();
    this.property.id = this.listingService.getDetailListing().id;
    this.listingService.updateListing(this.property).subscribe();
    this.goToProperties();

  }

  deleteProperty(){
    this.listingService.deleteListing(this.listingService.getDetailListing().id).subscribe(() => console.log("user deleted"));;
  }


  
  goToUser(){
    this.navCtrl.navigateForward('user');
  }

  goToBookingRequests(){
    this.navCtrl.navigateForward('booking-requests');
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


  // addBooking() {
  //   this.booking.listingId = this.displayListing.id;
  //   this.booking.hostId = this.displayListing.hostId;
  //   this.booking.userId = this.user.id;
  //   console.log(this.booking);
  //   //this.bookingService.invokeBookingCallback(this.booking);
  //   this.listingService.addBooking(this.booking).subscribe()
  //   this.goToBookingSuccess();
  // }



}
