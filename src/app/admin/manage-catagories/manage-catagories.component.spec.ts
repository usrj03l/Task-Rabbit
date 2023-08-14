import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatagoriesComponent } from './manage-catagories.component';

describe('ManageCatagoriesComponent', () => {
  let component: ManageCatagoriesComponent;
  let fixture: ComponentFixture<ManageCatagoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCatagoriesComponent]
    });
    fixture = TestBed.createComponent(ManageCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
