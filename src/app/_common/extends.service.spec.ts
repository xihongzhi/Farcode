import { TestBed, inject } from '@angular/core/testing';

import { ExtendsService } from './extends.service';

describe('ExtendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtendsService]
    });
  });

  it('should be created', inject([ExtendsService], (service: ExtendsService) => {
    expect(service).toBeTruthy();
  }));
});
