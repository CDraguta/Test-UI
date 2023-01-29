import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { ReservationApiService } from 'src/app/reservation-api.service';

@Component({
  selector: 'app-add-edit-reservation',
  templateUrl: './add-edit-reservation.component.html',
  styleUrls: ['./add-edit-reservation.component.css']
})
export class AddEditReservationComponent implements OnInit {

    reservationList$!: Observable<any[]>;
    constructor(private service:ReservationApiService) { }
  
    @Input() reservation:any;
    id: number = 0;
    lastName:string = "";
    firstName:string = "";
    socialSecurityNumber:string = "";
    phoneNumber:string = "";
    roomNumber! : number;
    dateTimeStart!:Date;
    dateTimeEnd!: Date;
  
    ngOnInit(): void {
      this.id = this.reservation.id;
      this.lastName = this.reservation.lastName;
      this.firstName = this.reservation.firstName;
      this.socialSecurityNumber = this.reservation.socialSecurityNumber;
      this.phoneNumber = this.reservation.phoneNumber;
      this.roomNumber = this.reservation.roomNumber;
      this.dateTimeStart = this.reservation.dateTimeStart;
      this.dateTimeEnd = this.reservation.dateTimeEnd;
    }
  
    add() {
      var reservation = {
        lastName : this.lastName,
        firstName : this.firstName,
        socialSecurityNumber : this.socialSecurityNumber,
        phoneNumber : this.phoneNumber,
        roomNumber : this.roomNumber,
        dateTimeStart : this.dateTimeStart,
        dateTimeEnd : this.dateTimeEnd,
       
      }
      this.service.add(reservation).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }
  
        var showAddSuccess = document.getElementById('add-success-alert');
        if(showAddSuccess) {
          showAddSuccess.style.display = "block";
        }
        setTimeout(function() {
          if(showAddSuccess) {
            showAddSuccess.style.display = "none"
          }
        }, 4000);
      })
    }
  
    update() {
      var reservation = {
        id: this.id,
        lastName : this.lastName,
        firstName : this.firstName,
        socialSecurityNumber : this.socialSecurityNumber,
        phoneNumber : this.phoneNumber,
        roomNumber : this.roomNumber,
        dateTimeStart : this.dateTimeStart,
        dateTimeEnd : this.dateTimeEnd,
      }
      var id:number = this.id;
      this.service.update(id,reservation).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn) {
          closeModalBtn.click();
        }
  
        var showUpdateSuccess = document.getElementById('update-success-alert');
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "block";
        }
        setTimeout(function() {
          if(showUpdateSuccess) {
            showUpdateSuccess.style.display = "none"
          }
        }, 4000);
      }) 
    }
  }