import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  constructor(private auth: AuthService, private chat: ChatService,private http:HttpClient) {  }

  currentUser:any;
  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem('userProfile') || '');

  }

  
  logOut() {
    this.auth.logOff('user');
  }
}
