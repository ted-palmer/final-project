import { TestBed } from '@angular/core/testing';

import { NavUserService } from './nav-user.service';

describe('NavUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavUserService = TestBed.get(NavUserService);
    expect(service).toBeTruthy();
  });
});
