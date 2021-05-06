import { TestBed } from '@angular/core/testing';

import { Access.MediaService } from './access.media.service';

describe('Access.MediaService', () => {
  let service: Access.MediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Access.MediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
