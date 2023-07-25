import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransactionsComponent } from './user-transactions.component';

describe('UserTransactionsComponent', () => {
  let component: UserTransactionsComponent;
  let fixture: ComponentFixture<UserTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTransactionsComponent]
    });
    fixture = TestBed.createComponent(UserTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
