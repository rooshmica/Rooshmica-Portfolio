import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGithubCalendarComponent } from './app-github-calendar.component';

describe('AppGithubCalendarComponent', () => {
  let component: AppGithubCalendarComponent;
  let fixture: ComponentFixture<AppGithubCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppGithubCalendarComponent]
    });
    fixture = TestBed.createComponent(AppGithubCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
