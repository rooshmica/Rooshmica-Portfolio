import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSkillProgressComponent } from './app-skill-progress.component';

describe('AppSkillProgressComponent', () => {
  let component: AppSkillProgressComponent;
  let fixture: ComponentFixture<AppSkillProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSkillProgressComponent]
    });
    fixture = TestBed.createComponent(AppSkillProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
