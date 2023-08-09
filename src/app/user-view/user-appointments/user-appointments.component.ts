import { Component } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { appointment } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})
export class UserAppointmentsComponent {
  currentUser: any;
  appointmentData$ = new Observable();
  appointments: any;
  dateAndTime: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadCurrentUser();
    this.loadAppointments();
  }

  loadCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
  }

  loadAppointments() {
    this.appointmentData$ = this.api.getAppointments('', this.currentUser.uid);
    this.appointmentData$.subscribe(data => this.appointments = data);
  }

  cancel(item: any, appointment: any) {
    item.cancelled = true;
    this.api.editAppointment(appointment.uid, item.userUid, { cancelled: item.cancelled });
  }
}
