import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavUserService } from '../../services/nav-user.service'
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service'
import { BookingService } from '../../services/booking.service'

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  public email: string;
  public password: string;
  public user: any;
  public status: boolean;

 
  constructor(private navCtrl: NavController, private authService: AuthService, private navUser: NavUserService, private bookingService: BookingService) {}

//   login() {
//     this.authService.loginUser(this.email, this.password).subscribe((response) => {
//       if (response == true) {
//         this.navUser.getUserByEmail(this.email).subscribe((response) => {
//           this.user = response;
          
//           this.navUser.setUser(this.user);

//           console.log(response);
//           // this.navUser.setUser(response);
//         });

//         this.navCtrl.navigateForward('user');
//       }
//       else {
//         alert("Username or Password is incorrect");
//       }

//     });
// }

  login() {
    this.authService.login(this.email, this.password, (x) => {
      console.log("x recieved: ", x);

      if (x.length > 0) {
        this.status = true;
      }
      else {
        this.status = false;
        alert("Username or Password is incorrect");
      }
      console.log("status recieved after getLogin() function was run: ", this.status)
      if (this.status == true) {
        this.authService.setUser(x[0]);
        this.bookingService.setUser();
        this.authService.setLoginStatusTrue();
        this.navCtrl.navigateForward('properties');
      }

    });

  }




  register() {
    this.navCtrl.navigateForward("registration");
  }


}