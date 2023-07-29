import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceId$:BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }
}
