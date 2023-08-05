import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { user } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private http: HttpClient, private router: Router,private api:ApiService) { }

  async createUser(userData: any, creds: any, type = 'user') {
    let uid;

    await createUserWithEmailAndPassword(this.auth, creds.email, creds.pass)
      .then(userCredential => {
        uid = userCredential.user.uid;
      })

    if (type === 'user') {
      const sendData = { uid: uid, ...userData }; 
      return this.http.post("http://localhost:3000/user/add", sendData).subscribe();
    } else {
      userData.append('uid', uid);
      return this.http.post("http://localhost:3000/provider/add", userData).subscribe();
    }
  }

  async login(email: string, pass: string) {
    return await signInWithEmailAndPassword(this.auth, email, pass);
  }

  async logOff(userType: string) {
    const uid = await this.getId();
    if (userType === 'user') {
      this.http.post('http://localhost:3000/user/removeSocket', { 'uid': uid }).subscribe();
    }else{
      this.http.post('http://localhost:3000/provider/removeSocket', { 'uid': uid }).subscribe();
    }

    await signOut(this.auth).then(()=>{
      this.router.navigate(['/registration']);
    })
    
    location.reload();

  }

  getId(): Promise<string | null> {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user.uid);
        } else {
          resolve(null);
        }
      });
    });
  }

}