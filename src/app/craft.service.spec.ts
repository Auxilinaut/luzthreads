import { TestBed, inject } from '@angular/core/testing';

import { CraftService } from './craft.service';

describe('CraftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CraftService]
    });
  });

  it('should be created', inject([CraftService], (service: CraftService) => {
    expect(service).toBeTruthy();
  }));
});
