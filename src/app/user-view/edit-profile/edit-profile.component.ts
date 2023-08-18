import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor(private fb: FormBuilder) { }

  currentUser = JSON.parse(localStorage.getItem('userProfile') || '');

  profileForm = this.fb.group({
    fname: ['', [Validators.maxLength(64)]],
    lname: ['', [Validators.maxLength(64)]],
    email: ['', [Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    city: ['', [Validators.required, Validators.minLength(1)]],
    street: ['', [Validators.required, Validators.minLength(1)]],
    street2: ['', [Validators.required, Validators.minLength(1)]],
    pin: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
  })

  onSubmit() {

  }

}
