import { TestBed } from '@angular/core/testing';

import { BasicResolveResolver } from './basic-resolve.resolver';

describe('BasicResolveResolver', () => {
  let resolver: BasicResolveResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BasicResolveResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
