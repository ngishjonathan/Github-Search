import { TestBed } from '@angular/core/testing';

import { GithubsearchRequestService } from './githubsearch-request.service';

describe('GithubsearchRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubsearchRequestService = TestBed.get(GithubsearchRequestService);
    expect(service).toBeTruthy();
  });
});
