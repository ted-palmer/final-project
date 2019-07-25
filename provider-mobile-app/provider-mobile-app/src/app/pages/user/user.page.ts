import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavUserService } from '../../services/nav-user.service'
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public displayUser: User = new User;
  public email: string;

  constructor(private navCtrl: NavController, private authService: AuthService) { 
    // this.email = this.authService.getGlobalEmail();
    // console.log(this.email);
    // this.authService.getUserByEmail(this.authService.globalEmail).subscribe((response) => {
    //   this.authService.setUser(response);
  // });
  }


  ngOnInit() {
    this.displayUser = this.authService.getUser();
    console.log(this.displayUser);
  }

  goToBookings(){
    this.navCtrl.navigateForward('bookings');
  }

  goToProperties(){
    this.navCtrl.navigateForward('properties');
  }

}
