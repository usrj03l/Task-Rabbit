import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { appointment } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-provider-appointments',
  templateUrl: './provider-appointments.component.html',
  styleUrls: ['./provider-appointments.component.css'],

})
export class ProviderAppointmentsComponent {

  currentUser: any;
  appointmentData$ = new Observable<any>();
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
    this.appointmentData$ = this.api.getAppointments(this.currentUser.uid).pipe(
      map(data => data?.userDetails.sort((a: any, b: any) => a.completed - b.completed))
    );
  }

  confirm(item: any) {
    item.booked = true;
    this.api.editAppointment(this.currentUser.uid, item._id, { booked: item.booked });
  }

  cancel(item: any) {
    item.cancelled = true;
    this.api.editAppointment(this.currentUser.uid, item._id, { cancelled: item.cancelled });
  }

  jobComplete(event: any, item: any) {
    item.completed = event;
    this.api.editAppointment(this.currentUser.uid, item._id, { completed: item.completed });
  }
}
