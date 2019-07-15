import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavUserService } from '../../services/nav-user.service'

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  username: string;

  constructor(private navCtrl: NavController, private navUser: NavUserService) {}


login() {
  this.navUser.setUsername(this.username)
  this.navCtrl.navigateForward("user");

}

register() {
  this.navCtrl.navigateForward("registration");
}


}