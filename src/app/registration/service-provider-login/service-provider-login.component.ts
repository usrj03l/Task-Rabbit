import { Component } from '@angular/core';

@Component({
  selector: 'app-service-provider-login',
  templateUrl: './service-provider-login.component.html',
  styleUrls: ['./service-provider-login.component.css']
})
export class ServiceProviderLoginComponent {
  email: string = ''
  password: string = ''

  onSubmit() {
    console.log('heloo');

  }
}
