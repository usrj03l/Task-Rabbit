import { Component, EventEmitter, Input, Output } from '@angular/core';
import { take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

interface items {
  desc: string,
  qty: number,
  price: number
}

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent {
  @Input() user: any;
  @Output() completed = new EventEmitter<Boolean>();
  desc = ''
  qty = 0;
  price = 0;
  data: items[] = []
  addButton = true;
  totalCost = 0;
  modeCash = true;
  currentUser: any;

  constructor(private api: ApiService) { }

  openButton() {
    if (this.desc.length > 0 && this.qty > 0) {
      this.addButton = false;
    } else {
      this.addButton = true;
    }
  }

  addItem() {
    this.data.push({
      desc: this.desc,
      qty: this.qty,
      price: this.price
    })

    this.cost();
    this.desc = '';
    this.qty = this.price = 0;
  }

  remove(item: any) {
    this.totalCost -= item.price;
    this.data = this.data.filter(data => data !== item)
  }

  cost() {
    this.totalCost = this.data.map(item => item.price).reduce((prev, next) => prev + next);
  }

  setMode() {
    this.modeCash = !this.modeCash;
  }

  submit() {
    this.currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
    const date = new Date();

    const provider = {
      uid: this.currentUser.uid,
      orgName: this.currentUser.orgName
    }

    console.log(this.user);
    

    const generatedBill = {
      userUid: this.user.userUid,
      name: this.user.name,
      address: this.user.address,
      phone: this.user.phone,
      email: this.user.email,
      date: date.getDate() + '-' + ( date.getMonth() + 1 ) + '-' + date.getFullYear(),
      mode: (this.modeCash) ? 'cash' : 'upi',
      totalCost: this.totalCost,
      itemList: this.data
    }

    this.api.setBill(provider, generatedBill).pipe(take(1)).subscribe(data => {
      if (data === 'success') {
        this.api.successMessage('Bill generated');
        this.completed.emit(true);
      }
    });
  }
}
