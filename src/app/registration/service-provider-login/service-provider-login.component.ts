import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-provider-login',
  templateUrl: './service-provider-login.component.html',
  styleUrls: ['./service-provider-login.component.css']
})
export class ServiceProviderLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    this.auth.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['view']);
      })

  }
}
