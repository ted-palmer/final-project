import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavUserService } from '../../services/nav-user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  username: string; 

  constructor(private navCtrl: NavController, private navUser: NavUserService) { }

  ngOnInit() {
    this.username = this.navUser.getUsername();
  }

  backToLogin(){
    this.navCtrl.navigateForward('login');
  }

  goToProperties(){
    this.navCtrl.navigateForward('properties');
  }

}
