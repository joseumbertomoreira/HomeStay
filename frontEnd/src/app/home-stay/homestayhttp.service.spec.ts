import { TestBed, inject } from '@angular/core/testing';

import { HomestayhttpService } from './homestayhttp.service';

describe('HomestayhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomestayhttpService]
    });
  });

  it('should be created', inject([HomestayhttpService], (service: HomestayhttpService) => {
    expect(service).toBeTruthy();
  }));
});
