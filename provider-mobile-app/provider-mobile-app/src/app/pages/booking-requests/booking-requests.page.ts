import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service'
import { BookingService } from '../../services/booking.service'
import { Booking } from '../../models/booking'

@Component({
  selector: 'app-booking-requests',
  templateUrl: './booking-requests.page.html',
  styleUrls: ['./booking-requests.page.scss'],
})
export class BookingRequestsPage implements OnInit {


  pending: any;
  accepted: any;
  rejected: any;

  constructor(private navCtrl: NavController, private bookingService: BookingService) { }

  ionViewWillEnter(){
  this.bookingService.setUser();

    this.bookingService.getBookingsPending().subscribe((response) => {
      this.pending = response;
    });

    this.bookingService.getBookingsAccepted().subscribe((response) => {
      this.accepted = response;
    });
    
    this.bookingService.getBookingsRejected().subscribe((response) => {
      this.rejected = response;


      console.log(this.pending);
    });

}


  ngOnInit() {

    this.bookingService.setUser();

    this.bookingService.getBookingsPending().subscribe((response) => {
      this.pending = response;
    });

    this.bookingService.getBookingsAccepted().subscribe((response) => {
      this.accepted = response;
    });
    
    this.bookingService.getBookingsRejected().subscribe((response) => {
      this.rejected = response;


      console.log(this.pending);
    });
  }

  rejectRequest(booking: Booking){
    booking.status = "rejected";
    this.bookingService.updateBooking(booking).subscribe(() => console.log("Booking Rejected"));

  }

  acceptRequest(booking: Booking){
    booking.status = "accepted";
    this.bookingService.updateBooking(booking).subscribe(() => console.log("Booking Accepted"));

  }

  backToDetails() {
    this.navCtrl.navigateForward('property-details');
  }

  goToUser(){
    this.navCtrl.navigateForward('user');
  }

  goToBookings(){
    this.navCtrl.navigateForward('bookings');
  }

  goToProperties(){
    this.navCtrl.navigateForward('properties');
  }
}
