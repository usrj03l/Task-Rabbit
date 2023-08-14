import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageServiceProvidersComponent } from './manage-service-providers.component';

describe('ManageServiceProvidersComponent', () => {
  let component: ManageServiceProvidersComponent;
  let fixture: ComponentFixture<ManageServiceProvidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageServiceProvidersComponent]
    });
    fixture = TestBed.createComponent(ManageServiceProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
