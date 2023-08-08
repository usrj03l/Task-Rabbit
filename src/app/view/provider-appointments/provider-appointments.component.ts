import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { appointment } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-provider-appointments',
  templateUrl: './provider-appointments.component.html',
  styleUrls: ['./provider-appointments.component.css'],
  
})
export class ProviderAppointmentsComponent {

  currentUser:any;
  appointmentData$ = new Observable<appointment | null>();
  dateAndTime:any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadCurrentUser();
    this.loadAppointments();
  }

  loadCurrentUser(){
    this.currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
  }

  loadAppointments() {
    this.appointmentData$ = this.api.getAppointments(this.currentUser.uid);
  }

  confirm(item:any){
    item.booked = true;
  }

  cancel(item:any){
    item.cancelled = true;
  }

  

}
