import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationApiService {

  readonly reservationAPIUrl = "https://localhost:7267/api";

  constructor(private http:HttpClient) { }

  getList():Observable<any[]> {
    return this.http.get<any>(this.reservationAPIUrl + '/reservation');
  }

  add(data:any) {
    return this.http.post(this.reservationAPIUrl + '/reservation', data);
  }

  update(id:number|string, data:any) {
    return this.http.put(this.reservationAPIUrl + `/reservation/${id}`, data);
  }
}
