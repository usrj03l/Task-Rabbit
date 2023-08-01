import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor(private fb:FormBuilder) { }

  contactForm = this.fb.group({
    fname:['',[Validators.required,Validators.maxLength(2)]],
    lname:['',[Validators.required,Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    establishmentYear:[null,[Validators.required,Validators.minLength(4),Validators.pattern(/\-?\d*\.?\d{1,2}/)]],
    orgName:['',[Validators.required,Validators.minLength(20)]],
    aadhar:[null,[Validators.required,Validators.minLength(12)]],
    pan:[null,[Validators.required,Validators.minLength(10)]],
    openTime:['',[Validators.required]],
    closeTime:['',[Validators.required]]
  });

  ngOnInit(){
      
  }

  onSubmit(){
    console.log('triggered');
    
    console.log('-->',this.contactForm.value);
    
  }

  frm(){
    return this.contactForm.controls;
  }

}
