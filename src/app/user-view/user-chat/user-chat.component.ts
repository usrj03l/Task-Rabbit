import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { message } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.css']
})
export class UserChatComponent {

  @ViewChild('scrollDiv') scrollDiv: any;

  newMessage = '';
  data: any
  uid: any;
  userMessageList: Observable<any> = new Observable();
  allMessages: message[] = []
  userIdList: string[] = []
  dateTime = new Date()
  currentUser!: string | null;
  currentUserView!: string | null;

  constructor(private auth: AuthService, private chatService: ChatService, private http: HttpClient) {

  }

  ngOnInit() {

    this.loadMessage();

    this.chatService.getNewMessage().subscribe((data: any) => {
      const dateTime = this.getDateTime();
      const receivedMessage = {
        message: data.message,
        date: dateTime.date,
        time: dateTime.time,
        messageType: data.messageType
      }

      if (this.uid === data.sender) {
        this.allMessages.push(receivedMessage);
      }
    })
  }

  sendMessage() {
    if (this.uid) {
      const dateTime = this.getDateTime();
      const sentMessage = {
        message: this.newMessage,
        date: dateTime.date,
        time: dateTime.time,
        messageType: 'sent'
      }
      this.allMessages.push(sentMessage);
      this.chatService.sendMessage(this.newMessage, this.uid, 'user');
      this.newMessage = '';

      this.scrollDown();
    }
  }

  getDateTime() {
    const date = this.dateTime.toLocaleString('default', { month: 'long', day: '2-digit' });
    const time = this.dateTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return { date: date, time: time }
  }
  async loadMessage() {
    this.currentUser = await this.auth.getId();

    this.userMessageList = this.http.post('http://localhost:3000/user/getMessages', { 'uid': this.currentUser })
    this.userMessageList.subscribe((data: any) => {
      this.userIdList = data.messages.map((item: { receiverUid: any; }) => item.receiverUid);
      this.data = this.http.post('http://localhost:3000/user/getUsers', { 'users': this.userIdList });
    });

    
  }

  async sub(item: any) {
    this.uid = item.uid;
    this.userMessageList
      .subscribe((data: any) => {
        this.allMessages =
          data.messages
            .filter((users: { receiverUid: string; }) => users.receiverUid === item.uid)
            .map(((user: { messageList: any; }) => user.messageList))[0];
            this.scrollDown();
      });
  }

  scrollDown() {
    setTimeout(() => {
      this.scrollDiv.nativeElement.scrollTop = this.scrollDiv.nativeElement.scrollHeight;
    }, 0);
  }
  
}
