import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationApiService } from '../reservation-api.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationList$!:Observable<any[]>;

  constructor(private service:ReservationApiService) { }

  ngOnInit(): void {
    this.reservationList$ = this.service.getList();
  }

  modalTitle:string = '';
  activateAddEditReservationComponent:boolean = false;
  reservation:any;

  modalAdd() {
    this.reservation = {
      id:0,
      lastName:null,
      firstName:null,
      socialSecurityNumber:null,
      phoneNumber:null,
      roomNumber:null,
      dateTimeStart:null,
      dateTimeEnd:null,
    }
    this.modalTitle = "Adauga";
    this.activateAddEditReservationComponent = true;

  }

  modalEdit(item:any) {
    this.reservation = item;
    this.modalTitle = "Editeaza";
    this.activateAddEditReservationComponent = true;
  }

  modalClose() {
    this.activateAddEditReservationComponent = false;
    this.reservationList$ = this.service.getList();
  }

}
