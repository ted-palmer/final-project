import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Booking } from '../../models/booking'
import { BookingService } from '../../services/booking.service'


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  pending: any;
  accepted: any;
  rejected: any;

  constructor(private navCtrl: NavController, private bookingService: BookingService) {

  }

  ngOnInit() {

    this.bookingService.getBookingsPending().subscribe((response) => {
      this.pending = response;
    });

    this.bookingService.getBookingsAccepted().subscribe((response) => {
      this.accepted = response;
    });

    this.bookingService.getBookingsRejected().subscribe((response) => {
      this.rejected = response;
    });
  }


  goToProperties() {
    this.navCtrl.navigateForward('properties');
  }

  goToUser() {
    this.navCtrl.navigateForward('user');
  }

}
