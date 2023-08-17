import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.css']
})
export class ProviderHomeComponent {
  isView = 'profile';

  constructor(private auth:AuthService,private http:HttpClient){ }
  
  currentUser = JSON.parse(localStorage.getItem('userProfile') || '');

  changeView(viewType: String) {
    if (viewType === 'profile') {
      this.isView = 'profile';
    }
    if (viewType === 'transactions') {
      this.isView = 'transactions';
    }
  }

  logOut() {
    this.auth.logOff('provider');
  }

}
