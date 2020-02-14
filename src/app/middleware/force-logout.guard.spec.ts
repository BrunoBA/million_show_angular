import { TestBed, async, inject } from '@angular/core/testing';

import { ForceLogoutGuard } from './force-logout.guard';

describe('ForceLogoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForceLogoutGuard]
    });
  });

  it('should ...', inject([ForceLogoutGuard], (guard: ForceLogoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
