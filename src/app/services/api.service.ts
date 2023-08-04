import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  sendData(data: any, id: string | null) {
    this.http.post(this.URL + 'provider/editProfile', { data, id }).subscribe();
  }

  sendReviews(data: any) {    
    this.http.post(this.URL + 'review/addReviews', data).subscribe();
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
}
