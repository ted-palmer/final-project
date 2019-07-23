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
  //     console.log('Global Email: ' + this.authService.globalEmail)
  //     this.authService.getUserByEmail(this.authService.globalEmail).subscribe((response) => {
  //       console.log("Response:" + response)
  //       this.authService.setUser(response);
  //       console.log("Get user: " + this.authService.getUser())
 
  // });
  }

  goToBookings(){
    this.navCtrl.navigateForward('bookings');
  }

  goToUser(){
    this.navCtrl.navigateForward('user');
  }

  goToPropertyDetails(listing: Listing){
    this.listingService.setDetailListing(listing);
    this.navCtrl.navigateForward('property-details');

  }

}



// this.listing = [];
//     this.listing.push(new Listing(1,'Apartment in Cape Town', 'Cape Town', 750, 'https://www.uaces.org/images/events/lisbon-old-town.jpeg'));
//     this.listing.push(new Listing(1,'Apartment in Lisbon', 'Lisbon', 300, 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/Lisbon---Itineraries---View-to-bridge.jpg?imwidth=450'));
//     this.listing.push(new Listing(1,'Apartment in Cape Town', 'Cape Town', 750, 'https://www.uaces.org/images/events/lisbon-old-town.jpeg'));
//     this.listing.push(new Listing(1,'Apartment in Lisbon', 'Lisbon', 300, 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/Lisbon---Itineraries---View-to-bridge.jpg?imwidth=450'));
//     this.listing.push(new Listing(1,'Apartment in Cape Town', 'Cape Town', 750, 'https://www.uaces.org/images/events/lisbon-old-town.jpeg'));
//     this.listing.push(new Listing(1,'Apartment in Lisbon', 'Lisbon', 300, 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Portugal/Lisbon/Lisbon---Itineraries---View-to-bridge.jpg?imwidth=450'));
 