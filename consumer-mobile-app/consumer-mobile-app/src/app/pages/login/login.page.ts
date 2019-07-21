import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavUserService } from '../../services/nav-user.service'
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  public loginUser: User = new User();

 
  constructor(private navCtrl: NavController, private authService: AuthService) {}


login(loginUser) {
  this.authService.loginUser(loginUser).subscribe();
  this.navCtrl.navigateForward("user");

}

register() {
  this.navCtrl.navigateForward("registration");
}


}