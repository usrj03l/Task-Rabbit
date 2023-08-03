import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceId$: BehaviorSubject<any> = new BehaviorSubject('');
  URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  sendData(data: any, id: string | null) {
    this.http.post(this.URL + 'provider/editProfile', { data, id }).subscribe();
  }

}
