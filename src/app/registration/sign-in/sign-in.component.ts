import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  email: string = ''
  password: string = ''
  
constructor(private auth:AuthService, private router:Router){ }

  onSubmit() {
    
    this.auth.login(this.email,this.password)
    .then(()=>{
      this.router.navigate(['user']);
    })

  }
}
