import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public addUser: User = new User();
  public existingUser: User = new User();

  constructor(private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() {
  }


  registerNewUser(){
    this.authService.registerUser(this.addUser).subscribe();
    console.log(this.addUser);
    //navigate forward
    //this.navCtrl.navigateForward("user");
  }

  alreadyHaveAccount(){
    this.navCtrl.navigateForward("login");
  }

}
