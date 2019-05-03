import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchDetailsComponent } from './githubsearch-details.component';

describe('GithubsearchDetailsComponent', () => {
  let component: GithubsearchDetailsComponent;
  let fixture: ComponentFixture<GithubsearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubsearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
