import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent {
  newMessage = '';
  receiveList: string[] = [];
  sendList: string[] = [];
  data: any

  uid: any;

  constructor(private auth: AuthService, private chatService: ChatService, private http: HttpClient) {

  }

  ngOnInit() {

    //this users list is for test
    this.data = this.http.get('http://localhost:3000/user/getUsers');

    // this.chatService.message$.subscribe(data => console.log(data));

    this.chatService.getNewMessage().subscribe((message: string) => {
      this.receiveList.push(message);
    })

  }

  sendMessage() {
    if (this.uid) {
      this.sendList.push(this.newMessage);
      this.chatService.sendMessage(this.newMessage, this.uid, 'user');
      this.newMessage = '';
    }

  }

  sub(item: any) {
    this.uid = item.uid;
  }
}
