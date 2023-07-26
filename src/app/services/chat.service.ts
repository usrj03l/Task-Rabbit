import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  usr: any;
  socket = io('http://localhost:3000');

  constructor(private http: HttpClient, private auth: AuthService) {
    this.soc();
  }

  async soc() {
    const id = await this.auth.getId()
    this.http.get('http://localhost:3000/user/' + id).subscribe(data => {
      if(data){
        this.setSocket(id,'user');
      }else{
        this.setSocket(id,'provider');
      }
    });
    
  }

  public async sendMessage(message: any, uid: any, userType: any) {
    const sender = await this.auth.getId();

    this.socket.emit('privateMessage', {
      senderId: sender,
      recipientId: uid,
      message: message,
      userType: userType
    });
  }


  public getNewMessage = () => {
    this.socket.on('privateMessage', (message: string) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };

  setSocket(id: any, userType: String) {
    let URL='';
    if(userType === 'user'){
      URL = 'http://localhost:3000/user/setSocket';
    }else{
      URL='http://localhost:3000/provider/setSocket';   
    }
    
    this.socket.on('connect', () => {      
      console.log(this.socket.id,URL);
        this.http.post(URL, { soc: String(this.socket.id), id: String(id) }).subscribe(); 
    });
  }
}
