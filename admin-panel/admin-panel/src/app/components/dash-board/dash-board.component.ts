import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  navItems: Array<any> = [
    {
      name: 'Listings',
      rout: '/listings-page'
    },
    {
      name: 'Bookings',
      rout: '/bookings-page'
    },
    {
      name: 'Users',
      rout: '/users'
    },
    {
      name: 'Hosts',
      rout: '/service-providers'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/users']);
  }

  navTo(page) {
    debugger;
    this.router.navigate([page.rout]);
  }

}
