import { Component, OnInit, Input } from '@angular/core';
import { ListingService } from '../../services/listing.service'


@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.scss'],
})
export class ListingsPageComponent implements OnInit {

  listings: any;

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    this.listingService.getListings().subscribe((response) => {
      this.listings = response;
    });
  }
  }

