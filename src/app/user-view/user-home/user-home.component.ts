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

  logOut() {
    this.auth.logOff('user');
  }

  ngOnInit() { 
    this.loadUser();
  }

  async loadUser(){
    const id = await this.auth.getId();
    this.http.post('http://localhost:3000/user/getUsers',{'users':id}).pipe(take(1)).subscribe(
      (data:any) => {
        const profileData = data[0];
        localStorage.setItem('userProfile',JSON.stringify(profileData));
      });
  }

}
