import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../models/user.model'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public user: User = new User();
  public newUserId: any;
  public userid;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  registerNewUser(){
    this.navCtrl.navigateForward("user");
  }

  alreadyHaveAccount(){
    this.navCtrl.navigateForward("login");
  }

}
