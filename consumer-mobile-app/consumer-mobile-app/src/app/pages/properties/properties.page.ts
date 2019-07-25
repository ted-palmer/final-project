import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../../models/listing.model'
import { ListingService } from '../../services/listing.service'
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {

  listing: any;

  constructor(private navCtrl: NavController, private listingService: ListingService, private authService: AuthService) { }

  ngOnInit() {
    this.listingService.getListings().subscribe((response) => {
      this.listing = response;
    });
  }

  goToBookings() {
    this.navCtrl.navigateForward('bookings');
  }

  goToUser() {
    this.navCtrl.navigateForward('user');
  }

  goToPropertyDetails(listing: Listing) {
    this.listingService.setDetailListing(listing);
    this.navCtrl.navigateForward('property-details');

  }

}
