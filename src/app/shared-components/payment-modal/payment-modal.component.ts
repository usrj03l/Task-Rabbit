import { Component } from '@angular/core';

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
  desc = ''
  qty = 0;
  price = 0;
  data: items[] = []
  addButton = true;
  totalCost = 0;

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
}
