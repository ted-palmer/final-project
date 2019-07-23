import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private alertController: AlertController, private activatedRouteSnapshot: ActivatedRouteSnapshot) { }

  canActivate() {
    if (this.authService.getLoginStatus()) {
      return true;
    }
    else {
      this.alertController.create({
        header: "Sorry",
        subHeader: "You are unable to access this path",
        message: "Please login or register",
        buttons: ["OK"]
      }).then(alert => alert.present());
      return false;
    }
  }
  
}