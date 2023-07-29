import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() data: any;
  profileImage!:string;
  defaultProfile = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
  
  getImage(item:any){
    return 'http://localhost:3000/images/' + item.profilePic.split('\\').pop()
  }
}
