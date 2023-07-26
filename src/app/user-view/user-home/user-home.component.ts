import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  constructor(private auth: AuthService, private chat: ChatService) {  }

  logOut() {
    this.auth.logOff('user');
  }

  ngOnInit() { }

}
