import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-provider-login',
  templateUrl: './service-provider-login.component.html',
  styleUrls: ['./service-provider-login.component.css']
})
export class ServiceProviderLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router,private http:HttpClient,private api:ApiService) { }

  onSubmit() {
    this.auth.login(this.email, this.password)
      .then(() => {
        this.checkUserAccountStatus();
      })
      .catch(err => this.api.rejectMessage('Invalid credentials'));
  }

  async checkUserAccountStatus(){
    const id = await this.auth.getId();
    this.http.get('http://localhost:3000/provider/getUser/' + id).pipe(take(1)).subscribe(
      (data:any) => {
        const profileData = data;
        if(profileData.disabled){
          this.api.rejectMessage('Your privileges has been revoked');
          setTimeout(()=>{
            this.auth.logOff('provider');
          },2500);
        }else{
          localStorage.setItem('userProfile',JSON.stringify(profileData));
          this.router.navigate(['view']);
        }  
      });
  }
}
