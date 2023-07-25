import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegHomeComponent } from './reg-home.component';

describe('RegHomeComponent', () => {
  let component: RegHomeComponent;
  let fixture: ComponentFixture<RegHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegHomeComponent]
    });
    fixture = TestBed.createComponent(RegHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
