import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor(private fb: FormBuilder) { }

  contactForm = this.fb.group({
    fname: ['', [Validators.required, Validators.maxLength(64)]],
    lname: ['', [Validators.required, Validators.maxLength(64)]],
    email: ['', [Validators.required, Validators.email]],
    establishmentYear: [null,
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/\-?\d*\.?\d{1,2}/)
      ]],
    orgName: ['', [
      Validators.required,
      Validators.maxLength(50)
    ]],
    aadhar: ['', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern(/^[0-9]\d*$/)
    ]],
    pan: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]\d*$/)
    ]],
    openTime: ['', [Validators.required]],
    closeTime: ['', [Validators.required]],
    aboutUs: this.fb.array([]),
    fQues: this.fb.array([])
  });

  ngOnInit() { }

  get aboutInfo() {
    return (<FormArray>this.contactForm.get('aboutUs'));
  }

  onSubmit() {
    console.log('-->', this.contactForm.value);
  }

  addAbout() {
    const newGroup = this.fb.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required]
    });

    (<FormArray>this.contactForm.get('aboutUs')).push(newGroup);

  }

  removeInfo(index: number) {
    (<FormArray>this.contactForm.get('aboutUs')).removeAt(index);
  }

  addFreq(){
    const newGroup = this.fb.group({
      'question': ['', Validators.required],
      'answer': ['', Validators.required]
    });

    (<FormArray>this.contactForm.get('fQues')).push(newGroup);
  }

  removeQues(index: number) {
    (<FormArray>this.contactForm.get('fQues')).removeAt(index);
  }

}

