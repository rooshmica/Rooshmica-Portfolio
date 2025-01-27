import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoCardComponent } from './github-repo-card.component';

describe('GithubRepoCardComponent', () => {
  let component: GithubRepoCardComponent;
  let fixture: ComponentFixture<GithubRepoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubRepoCardComponent]
    });
    fixture = TestBed.createComponent(GithubRepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
