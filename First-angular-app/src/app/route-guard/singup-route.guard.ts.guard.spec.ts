import { TestBed } from '@angular/core/testing';

import { SingupRouteGuardTsGuard } from './singup-route.guard.ts.guard';

describe('SingupRouteGuardTsGuard', () => {
  let guard: SingupRouteGuardTsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SingupRouteGuardTsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
