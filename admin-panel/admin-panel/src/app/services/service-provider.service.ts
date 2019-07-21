import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/service-provider';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {


  constructor(private http: HttpClient) {}

  getServiceProviders() {
    return this.http.get('http://localhost:5000/api/users/host');
  }

}
