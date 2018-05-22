import { TestBed, inject } from '@angular/core/testing';

import { PagebaseService } from './pagebase.service';

describe('PagebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagebaseService]
    });
  });

  it('should be created', inject([PagebaseService], (service: PagebaseService) => {
    expect(service).toBeTruthy();
  }));
});
