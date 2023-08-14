import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  email: string = ''
  password: string = ''
  
constructor(private auth:AuthService, private router:Router,private api:ApiService,private http:HttpClient){ }


  onSubmit() {
    
    this.auth.login(this.email,this.password)
    .then(()=>{
      this.checkUserAccountStatus();
    })

  }

  async checkUserAccountStatus(){
    const id = await this.auth.getId();
    this.http.post('http://localhost:3000/user/getUsers',{'users':id}).pipe(take(1)).subscribe(
      (data:any) => {
        const profileData = data[0];
        if(profileData.disabled){
          this.auth.logOff('user');
        }else{
          localStorage.setItem('userProfile',JSON.stringify(profileData));
          this.router.navigate(['user']);
        }  
      });
  }
}
