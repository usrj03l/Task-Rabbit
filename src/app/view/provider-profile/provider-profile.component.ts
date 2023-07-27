import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent {
  openModel = false
  updateProfile(event:any){

  }

  modelView(){
    this.openModel = true;
  }

  submit(){
    console.log('pic submitted');
    
  }
}
