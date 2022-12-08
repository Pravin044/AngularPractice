import { TestBed } from '@angular/core/testing';

import { SingupRouteGuard } from './singup-route.guard';

describe('SingupRouteGuard', () => {
  let guard: SingupRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SingupRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
