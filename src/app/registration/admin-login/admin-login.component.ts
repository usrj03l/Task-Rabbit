import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private auth:AuthService,private router:Router) { }

  email = '';
  password = '';

  onSubmit() {
    this.auth.login(this.email,this.password)
    .then(()=>{
      localStorage.setItem('userProfile',JSON.stringify({userType:'admin'}));
      this.router.navigate(['admin-home']);
    })
  }

}
