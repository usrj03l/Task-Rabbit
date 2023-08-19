import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { serviceGuardGuard } from './service-guard.guard';

describe('serviceGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => serviceGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
