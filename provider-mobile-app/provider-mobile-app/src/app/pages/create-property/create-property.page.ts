import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from '../../models/listing.model'
import { ListingService} from '../../services/listing.service'

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.page.html',
  styleUrls: ['./create-property.page.scss'],
})
export class CreatePropertyPage implements OnInit {

  public property: Listing = new Listing();

  public title: string;
  public location: string;
  public description: string;
  public numberOfPeople: number;
  public pricePerNight: number;

  constructor(private navCtrl: NavController, private listingService: ListingService) { }

  ngOnInit() {
  }


  addProperty(){
    this.property.title = this.title;
    this.property.location = this.location;
    this.property.description = this.description;
    this.property.numberOfPeople = this.numberOfPeople;
    this.property.pricePerNight = this.pricePerNight;
    this.property.hostId = this.listingService.getHostId();
    this.listingService.createListing(this.property).subscribe();
    this.goToProperties();
  }


  goToProperties(){
    this.navCtrl.navigateForward('properties');
  }

  goToUser(){
    this.navCtrl.navigateForward('user');
  }

  goToBookings(){
    this.navCtrl.navigateForward('bookings');

  }

}
