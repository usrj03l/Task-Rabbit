import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpHomeComponent } from './sign-up-home.component';

describe('SignUpHomeComponent', () => {
  let component: SignUpHomeComponent;
  let fixture: ComponentFixture<SignUpHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpHomeComponent]
    });
    fixture = TestBed.createComponent(SignUpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
