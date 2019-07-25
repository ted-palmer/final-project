import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service'
import { BookingService } from '../../services/booking.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public name: string;
  public surname: string;
  public email: string;
  public password: string;
  public status: boolean;

  // public addUser: User = new User();
  addUser: User = new User();

  constructor(private navCtrl: NavController, private authService: AuthService, private bookingService: BookingService) { }

  ngOnInit() {
  }


  registerNewUser(){
    console.log(this.addUser);

    //this.authService.setGlobalEmail(this.addUser.email)
    this.authService.registerUser(this.addUser, (x) => {
      if(x == "user already exits"){
        alert("Email is already associated with an account");
      }


      if(x != null){
        console.log("X= " + x)
        this.authService.getUserByEmail(x.email).subscribe( response =>{
          this.addUser = response[0];
          console.log("AddUser: " + this.addUser);
          this.authService.setUser(this.addUser);
          this.bookingService.setUser();
          this.navCtrl.navigateForward("properties");
        })
      }
      else{
        alert("Email is already associated with an account");
      }
    })
      
  }
  
  // registerNewUser(){
  
  //   console.log("AddUser: " + this.addUser);
  //   //this.authService.setGlobalEmail(this.addUser.email)
  //   this.authService.registerUser(this.addUser, (x) => {
  //     if(x != null){
  //       console.log("X= " + x)
  //       this.authService.getUserByEmail(x.email).subscribe( response =>{
  //         this.addUser = response[0];
  //         console.log("AddUser: " + this.addUser);
  //         this.authService.setUser(this.addUser);

  //         this.navCtrl.navigateForward("properties");
  //       })
  //     }
  //     else{
  //       alert("Email is already associated with an account");
  //     }
  //   })

      
  // }


  // registerNewUser() {
  //   this.authService.registerUser(this.name, this.surname, this.email, this.password, (x) => {
  //     console.log("x recieved: ", x);

  //     if (x.length > 0) {
  //       this.status = true;
  //     }
  //     else {
  //       this.status = false;
  //       alert("Email is associated with another account");
  //     }
  //     console.log("status recieved after getLogin() function was run: ", this.status)
  //     if (this.status == true) {
  //       this.authService.setUser(x[0]);
  //       this.bookingService.setUser();
  //       this.authService.setLoginStatusTrue();
  //       this.navCtrl.navigateForward('properties');
  //     }

  //   });

  // }



  alreadyHaveAccount(){
    this.navCtrl.navigateForward("login");
  }

}
