import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAppointmentsComponent } from './provider-appointments.component';

describe('ProviderAppointmentsComponent', () => {
  let component: ProviderAppointmentsComponent;
  let fixture: ComponentFixture<ProviderAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderAppointmentsComponent]
    });
    fixture = TestBed.createComponent(ProviderAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
