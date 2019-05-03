import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubsearchFormComponent } from './githubsearch-form.component';

describe('GithubsearchFormComponent', () => {
  let component: GithubsearchFormComponent;
  let fixture: ComponentFixture<GithubsearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubsearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubsearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
