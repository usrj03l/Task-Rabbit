import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private auth: AuthService, private router: Router) { }

  fname = ''
  lname = ''
  email = ''
  pass = ''
  repass = ''
  phone!: Number
  street = ''
  street2 = ''
  city = ''
  state = ''
  zip!: Number;

  onSubmit() {

    const userData: user = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      phone: this.phone,
      street: this.street,
      street2: this.street2,
      city: this.city,
      state: this.state,
      zip: this.zip,
      socketId: '',
      userType:'user'
    }

    if (this.pass === this.repass) {
      this.auth.createUser(userData, { email: this.email, pass: this.pass })
        .then(() => {
          this.router.navigate(['/user']);
        })
    }

  }

}
