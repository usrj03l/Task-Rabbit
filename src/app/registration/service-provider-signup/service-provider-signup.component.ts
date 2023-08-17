import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { user } from 'src/app/model/model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-service-provider-signup',
  templateUrl: './service-provider-signup.component.html',
  styleUrls: ['./service-provider-signup.component.css']
})
export class ServiceProviderSignupComponent {

  constructor(private auth: AuthService, private router: Router, private api: ApiService, private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    fname: ['', [Validators.required, Validators.maxLength(64), Validators.minLength(1)]],
    lname: ['', [Validators.required, Validators.maxLength(64), Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(6)]],
    repass: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    orgName: ['', [
      Validators.maxLength(50),
      Validators.required,
      Validators.minLength(1)
    ]],
    aadhar: ['', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern(/^[0-9]\d*$/)
    ]],
    pan: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]\d*$/)
    ]],
    city: ['', [Validators.required, Validators.minLength(1)]],
    state: ['', [Validators.required]],
    serviceType: ['', [Validators.required]],
    image: ['', [Validators.required]]
  });

  services$ = new Observable<any>();
  states$ = new Observable<any>();


  email: string = '';
  pass: string = '';
  image: File | undefined;

  ngOnInit() {
    this.services$ = this.api.getServices();
    this.states$ = this.api.getStates();
  }

  expSubmit(event: any) {
    this.image = event.target.files[0];
  }

  onSubmit() {
    this.email = <string>this.registrationForm.value['email'];
    this.pass = <string>this.registrationForm.value['pass'];
    const formData = new FormData();
    formData.append('fname', <string>this.registrationForm.value['fname']);
    formData.append('lname', <string>this.registrationForm.value['lname']);
    formData.append('email', <string>this.registrationForm.value['email']);
    formData.append('phone', <string>this.registrationForm.value['phone']);
    formData.append('pan', <string>this.registrationForm.value['pan']);
    formData.append('aadhar', <string>this.registrationForm.value['aadhar']);
    formData.append('image', this.image as File);
    formData.append('city', <string>this.registrationForm.value['city']);
    formData.append('state', <string>this.registrationForm.value['state']);
    formData.append('serviceType', <string>this.registrationForm.value['serviceType']);
    formData.append('orgName', <string>this.registrationForm.value['orgName']);

    this.auth.createUser(formData, { email: this.email, pass: this.pass }, 'service')
  }
}
