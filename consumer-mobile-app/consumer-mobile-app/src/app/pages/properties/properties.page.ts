import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../../models/listing.model'
import { ListingService } from '../../services/listing.service'


@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {

  listing: any;

  constructor(private navCtrl: NavController, private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.getListings().subscribe((response) => {
      this.listing = response;
    });
  }

  backToLogin(){
    this.navCtrl.navigateForward('login');
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
 