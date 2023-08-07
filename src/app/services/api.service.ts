import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import Swal from 'sweetalert2';

interface appointment {
  userUid: string,
  name: string,
  booked: boolean,
  time: string,
  address: string,
  completed:boolean
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  sendData(data: any, id: string | null) {
    this.http.post(this.url + 'provider/editProfile', { data, id }).subscribe();
  }

  sendReviews(data: any) {
    this.http.post(this.url + 'review/addReviews', data).subscribe();
  }

  async textArea(): Promise<string> {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Review',
      inputPlaceholder: 'Type your message here...',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    return new Promise((resolve, reject) => {
      if (text) {
        resolve(text);
      }
    });
  }

  successMessage(message:string){
    Swal.fire(
      'Great!',
      message,
      'success'
    )
  }

  infoMessage(message:string){
    Swal.fire(
      'Please be patient',
      message,
      'info'
    )
  }

  getReviews(id: string) {
    return this.http.get(this.url + `review/getReviews?id=${id}`);
  }

  bookAppointment(id: string, appointmentData:appointment) {
    return this.http.post(this.url + 'appointment/bookAppointment',{id,appointmentData})
  }

  enquire(id: string) {
    // this.http.post(this.url + 'provider/enquire',{id}).pipe(take(1)).subscribe();
  }



}
