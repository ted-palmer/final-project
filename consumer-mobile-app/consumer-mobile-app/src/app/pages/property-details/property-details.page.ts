import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../../services/listing.service';
import { Listing } from '../../models/listing.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  displayListing: Listing;

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
}
