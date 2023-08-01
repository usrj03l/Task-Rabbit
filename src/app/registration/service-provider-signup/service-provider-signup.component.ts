import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/model/model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-provider-signup',
  templateUrl: './service-provider-signup.component.html',
  styleUrls: ['./service-provider-signup.component.css']
})
export class ServiceProviderSignupComponent {
  constructor(private auth: AuthService, private router: Router) { }

  fname = '';
  lname = '';
  email = '';
  pass = '';
  repass = '';
  phone!: Number;
  pan: Number | undefined;
  image: File | undefined;
  city = '';
  state = '';
  aadhar: Number | undefined;
  serviceType: string = 'electrician';
  orgName: string = '';
  expSubmit(event: any) {
    this.image = event.target.files[0];
  }

  service(event: any) {
    this.serviceType = event.target.value;
    console.log(this.serviceType);

  }

  onSubmit() {

    const formData = new FormData();
    formData.append('fname', this.fname);
    formData.append('lname', this.lname);
    formData.append('email', this.email);
    formData.append('phone', String(this.phone));
    formData.append('pan', String(this.pan));
    formData.append('aadhar', String(this.aadhar));
    formData.append('image', this.image as File);
    formData.append('city', this.city);
    formData.append('state', this.state);
    formData.append('serviceType', this.serviceType);
    formData.append('orgName', this.orgName);
    if (this.pass === this.repass) {
      this.auth.createUser(formData, { email: this.email, pass: this.pass }, 'service')
        .then(() => {
          this.router.navigate(['/view']);
        })
    }

  }
}
