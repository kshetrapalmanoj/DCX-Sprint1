import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DevelopersService } from './developers.service';

describe('DevelopersService', () => {
  let service: DevelopersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DevelopersService]
    });
    service = TestBed.inject(DevelopersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
