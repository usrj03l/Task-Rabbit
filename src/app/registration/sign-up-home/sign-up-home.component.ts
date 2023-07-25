import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-home',
  templateUrl: './sign-up-home.component.html',
  styleUrls: ['./sign-up-home.component.css']
})
export class SignUpHomeComponent {
  isUser = true;

  toggle(value: boolean) {
    this.isUser = value;
  }
}
