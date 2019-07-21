import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

getBookings(){
  return this.http.get('http://localhost:5000/api/bookings');

}


}
