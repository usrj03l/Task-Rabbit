import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http: HttpClient, private auth: AuthService) { }


  async soc() {
    const id = await this.auth.getId()
    this.setSocket(id);
  }

  usr: any;
  socket = io('http://localhost:3000');

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

  setSocket(id: any) {
    this.socket.on('connect', () => {
      this.http.post('http://localhost:3000/user/setSocket', { soc: String(this.socket.id), id: String(id) }).subscribe();
    });

   
  }



}
