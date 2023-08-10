import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { currentUser, payment, user } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css']
})
export class UserPaymentsComponent {
  isBill = true;
  currentUser!: currentUser;
  billData$= new Observable<any>();

  constructor(private api:ApiService){ }

  ngOnInit(){
    this.currentUser = JSON.parse( localStorage.getItem('userProfile') || '');
    this.billData$ = this.api.getBill(this.currentUser.uid);
  }

  changeTab(value: string) {

    if (value === 'transaction') {
      this.isBill = true;     
    } else {
      this.isBill = false
    }
  }
}
