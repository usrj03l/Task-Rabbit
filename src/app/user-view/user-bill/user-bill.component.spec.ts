import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillComponent } from './user-bill.component';

describe('UserBillComponent', () => {
  let component: UserBillComponent;
  let fixture: ComponentFixture<UserBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBillComponent]
    });
    fixture = TestBed.createComponent(UserBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
