import { Component } from '@angular/core';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css']
})
export class UserPaymentsComponent {
  isBill = true;

  changeTab(value: string) {

    if (value === 'transaction') {
      this.isBill = true;     
    } else {
      this.isBill = false
    }

  }
}
