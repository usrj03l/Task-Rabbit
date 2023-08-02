import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidateComponent } from './form-validate.component';

describe('FormValidateComponent', () => {
  let component: FormValidateComponent;
  let fixture: ComponentFixture<FormValidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormValidateComponent]
    });
    fixture = TestBed.createComponent(FormValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
