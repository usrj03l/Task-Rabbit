import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor(private fb: FormBuilder, private api: ApiService) { }

  currentUser: any;

  profileForm = this.fb.group({
    fname: ['', [Validators.maxLength(64)]],
    lname: ['', [Validators.maxLength(64)]],
    email: ['', [Validators.email]],
    phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    city: ['', [Validators.minLength(1)]],
    street: ['', [Validators.minLength(1)]],
    street2: ['', [Validators.minLength(1)]],
    zip: ['', [Validators.minLength(6), Validators.maxLength(6)]]
  })

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('userProfile') || '');
  }
  onSubmit() {
    this.api.editUserprofile(this.profileForm.value,this.currentUser.uid);
  }

}
