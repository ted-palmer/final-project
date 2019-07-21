import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../models/user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((response) => {
    this.users = response;
    });
  
   
}
  // makeSimpleRequest() {
  //   this.http.get('http://localhost:5000/api/users').subscribe((response) => {
  //     //console.log(response);
  //     this.users = response;
  //   });
  // }

}

