import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTransactionComponent } from './provider-transaction.component';

describe('ProviderTransactionComponent', () => {
  let component: ProviderTransactionComponent;
  let fixture: ComponentFixture<ProviderTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderTransactionComponent]
    });
    fixture = TestBed.createComponent(ProviderTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
