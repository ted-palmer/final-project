import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  newUser: User;
  existingUser: User;

  constructor(private http: HttpClient) { }



registerUser(newUser){
  return this.http.post('http://localhost:5000/api/auth/register', newUser);
}

loginUser(existingUser){
  return this.http.post('http://localhost:5000/api/auth/login', existingUser);
}





}
