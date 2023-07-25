import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderSignupComponent } from './service-provider-signup.component';

describe('ServiceProviderSignupComponent', () => {
  let component: ServiceProviderSignupComponent;
  let fixture: ComponentFixture<ServiceProviderSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceProviderSignupComponent]
    });
    fixture = TestBed.createComponent(ServiceProviderSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
