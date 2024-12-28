import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';
import { EducationComponent } from './education/education.component';
import { AppSkillProgressComponent } from './app-skill-progress/app-skill-progress.component';
import { ProjectsComponent } from './projects/projects.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GreetingComponent,
    SkillsComponent,
    SocialMediaComponent,
    SoftwareSkillComponent,
    EducationComponent,
    AppSkillProgressComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
