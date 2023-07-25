import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.css']
})
export class ProviderHomeComponent {
  isView = 'profile';

  changeView(viewType: String) {
    if (viewType === 'profile') {
      this.isView = 'profile';
    }
    if (viewType === 'transactions') {
      this.isView = 'transactions';
    }
  }

  

}
