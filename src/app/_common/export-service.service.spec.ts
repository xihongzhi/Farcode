import { TestBed, inject } from '@angular/core/testing';

import { ExportServiceService } from './export-service.service';

describe('ExportServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportServiceService]
    });
  });

  it('should be created', inject([ExportServiceService], (service: ExportServiceService) => {
    expect(service).toBeTruthy();
  }));
});
