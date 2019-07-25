import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  newUser: User;
  //existingUser: User;
  public user: User;
  private isLoggedIn: Boolean = false;
  public input: string
  public globalEmail: string;

  constructor(private http: HttpClient) { }


  getUserByEmail(email){
    return this.http.get('http://localhost:5000/api/users/email/' + email);

  }


registerUser(userToAdd, callback){
  this.http.post('http://localhost:5000/api/auth/register', userToAdd).subscribe((response: Array<User>) => {
    console.log("response recieved by backend register: ", response);
    callback(response);
    
  });
}


login(email, password, callback){
  this.http.post('http://localhost:5000/api/auth/login', {email, password}).subscribe((response: Array<User>) => {
  // console.log("response recieved by backend login: ", response);
    callback(response);
    
  });
}


public setUser(user: any) {
  this.user = user;
}

public getUser(): User{
  return this.user;
}

getLoginStatus(): Boolean {
  return this.isLoggedIn;
}

setLoginStatusTrue(){
  this.isLoggedIn = true;
}

}
