import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-bookings-page',
  templateUrl: './bookings-page.component.html',
  styleUrls: ['./bookings-page.component.scss']
})
export class BookingsPageComponent implements OnInit {

  bookings: any;

  constructor(private bookingService: BookingService) { }


  ngOnInit() {
    this.bookingService.getBookings().subscribe((response) => {
      //console.log(response);
      this.bookings = response;
    });
  }
  
}
