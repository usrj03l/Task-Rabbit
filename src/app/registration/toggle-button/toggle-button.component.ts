import { Component, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {

  @Output() toggled = new EventEmitter<boolean>();
  
  userToggle(){
    this.toggled.emit(true);
  }

  serviceToggle(){
    this.toggled.emit(false);
  }
}
