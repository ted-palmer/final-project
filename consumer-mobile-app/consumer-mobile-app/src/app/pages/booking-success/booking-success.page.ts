import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.page.html',
  styleUrls: ['./booking-success.page.scss'],
})
export class BookingSuccessPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
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
