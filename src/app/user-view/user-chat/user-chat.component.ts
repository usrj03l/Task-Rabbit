import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable, Subject, concatAll, map, merge, switchMap, takeUntil, tap, toArray, startWith } from 'rxjs';
import { message } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';
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
  data1$ = new Observable<any>();
  data2$ = new Observable<any>();
  data = new Observable<any>();
  allUsersdata$ = new Observable<any>();
  uid: any;
  userMessageList: Observable<any> = new Observable();
  allMessages: message[] = []
  userIdList: string[] = []
  dateTime = new Date()
  currentUser!: string | null;
  currentUserView!: string | null;
  unSubscribe$ = new Subject();
  userType!:string;

  constructor(private auth: AuthService, private chatService: ChatService, private http: HttpClient, private api:ApiService) { }

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
        this.scrollDown();
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
      this.chatService.sendMessage(this.newMessage, this.uid, this.userType);
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
    this.userMessageList = this.http.post('http://localhost:3000/message/getMessages', { 'uid': this.currentUser });

    this.data1$ = this.userMessageList.pipe(
      map(data => data.messages.map((item: { receiverUid: any; }) => item.receiverUid)),
      switchMap(userIdList => this.http.post('http://localhost:3000/user/getUsers', { 'users': userIdList }))  
    )

    this.data2$ = this.userMessageList.pipe(
      map(data => data.messages.map((item: { receiverUid: any; }) => item.receiverUid)),
      switchMap(userIdList => this.http.post('http://localhost:3000/provider/getUsersList', { 'users': userIdList })) 
    )

    this.allUsersdata$ = this.data = merge(this.data1$,this.data2$).pipe(concatAll(),toArray(),tap(()=>this.checkNewUsers()));   
  }

  async viewAllMessages(item: any) {
    this.userType = item.userType;    
    this.uid = item.uid;
    console.log(this.userType,this.uid);
    
    this.userMessageList
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe((data: any) => {
        this.allMessages =
          data.messages
            .filter((users: { receiverUid: string; }) => users.receiverUid === item.uid)
            .map(((user: { messageList: any; }) => user.messageList))[0];
        this.scrollDown();
      });
  }

  checkNewUsers(){
    if(this.api.checkUsers.getValue()){
      const newUser = this.api.checkUsers.getValue();
      this.api.checkUsers.next(null);
      this.allUsersdata$ = this.data.pipe(startWith([newUser]),concatAll(),toArray());    
    }
  } 

  scrollDown() {
    setTimeout(() => {
      this.scrollDiv.nativeElement.scrollTop = this.scrollDiv.nativeElement.scrollHeight;
    }, 0);
  }

  ngOnDestroy() {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }
}
