import { TestBed } from '@angular/core/testing';

import { AccessMediaService } from './access.media.service';

describe('Access.MediaService', () => {
  let service: AccessMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
