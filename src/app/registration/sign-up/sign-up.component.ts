import { Component } from '@angular/core';
import { FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private auth: AuthService, private router: Router,private api:ApiService,private fb:FormBuilder) { } 

  registrationForm = this.fb.group({
    fname: ['', [Validators.required, Validators.maxLength(64), Validators.minLength(1)]],
    lname: ['', [Validators.required, Validators.maxLength(64), Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(6)]],
    repass: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    city: ['', [Validators.required, Validators.minLength(1)]],
    street: ['', [Validators.required, Validators.minLength(1)]],
    street2: ['', [Validators.required, Validators.minLength(1)]],
    state: ['', [Validators.required]],
    pin: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
  });

  email = ''
  pass = ''
  states$ = new Observable<any>();

  ngOnInit(){
    this.states$ = this.api.getStates(); 
  }
  
  onSubmit() {
    this.email = <string>this.registrationForm.value['email']
    this.pass = <string>this.registrationForm.value['pass']

    const userData: user = {
      fname: <string>this.registrationForm.value['fname'],
      lname: <string>this.registrationForm.value['lname'],
      email: <string>this.registrationForm.value['email'],
      phone: <string>this.registrationForm.value['phone'],
      street: <string>this.registrationForm.value['street'],
      street2: <string>this.registrationForm.value['street2'],
      city: <string>this.registrationForm.value['city'],
      state: <string>this.registrationForm.value['state'],
      zip: <string>this.registrationForm.value['pin'],
      socketId: '',
      userType:'user'
    }
      this.auth.createUser(userData, { email: this.email, pass: this.pass });
  }

}
