import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavUserService {
  private username: string;

  constructor() { }

  public setUsername(username: string) {
    this.username = username;
  }

  public getUsername(): string {
    return this.username;
  }
}
