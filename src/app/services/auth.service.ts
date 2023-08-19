import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private http: HttpClient, private router: Router, private api: ApiService) { }

  createUser(userData: any, creds: any, type = 'user') {
    let uid;

    createUserWithEmailAndPassword(this.auth, creds.email, creds.pass)
      .then(userCredential => {
        uid = userCredential.user.uid;
        this.createUserAccount(userData, type, uid);
        console.log(uid);
      })
      .catch(err => this.api.rejectMessage('User already exists'));
  }

  createUserAccount(userData: any, type = 'user', uid: string) {
    if (type === 'user') {
      const sendData = { uid: uid, ...userData };
      return this.http.post("http://localhost:3000/user/add", sendData)
        .pipe(take(1))
        .subscribe(data => {
          localStorage.setItem('userProfile', JSON.stringify(data))
          this.router.navigate(['/user']);
        });
    } else {
      userData.append('uid', uid);
      return this.http.post("http://localhost:3000/provider/add", userData)
        .pipe(take(1))
        .subscribe(data => {
          localStorage.setItem('userProfile', JSON.stringify(data))
          this.router.navigate(['/view']);
        });
    }
  }

  login(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  async logOff(userType: string) {
    const uid = await this.getId();
    if (userType === 'user') {
      this.http.post('http://localhost:3000/user/removeSocket', { 'uid': uid }).subscribe();
    } else {
      this.http.post('http://localhost:3000/provider/removeSocket', { 'uid': uid }).subscribe();
    }

    await signOut(this.auth).then(() => {
      this.router.navigate(['/registration/']);
      localStorage.removeItem('userProfile');
    });

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