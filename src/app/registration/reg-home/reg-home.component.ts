import { Component } from '@angular/core';

@Component({
  selector: 'app-reg-home',
  templateUrl: './reg-home.component.html',
  styleUrls: ['./reg-home.component.css']
})
export class RegHomeComponent {
  isUser=true;

  toggle(value:boolean){
    this.isUser=value;
  }
}
