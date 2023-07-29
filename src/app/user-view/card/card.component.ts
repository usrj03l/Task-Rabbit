import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() data: any;
  profileImage!:string;
  defaultProfile = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';

  constructor(private api:ApiService,private router:Router) { }
  
  getImage(item:any){
    return 'http://localhost:3000/images/' + item.profilePic.split('\\').pop()
  }

  gotoService(item:any){
    this.api.serviceId$.next(item);
    console.log(item);
    
    this.router.navigate(['/user/service-info']);
  }
}
