import { Component } from '@angular/core';

@Component({
  selector: 'app-app-skill-progress',
  templateUrl: './app-skill-progress.component.html',
  styleUrls: ['./app-skill-progress.component.css'],
})
export class AppSkillProgressComponent {
  techStack = {
    viewSkillBars: true,
    experience: [
      { Stack: 'C#.Net', progressPercentage: '90%' },
      { Stack: '.Net Core', progressPercentage: '80%' },
      { Stack: 'SQL Server', progressPercentage: '80%' },
      { Stack: 'MachineLearning/AI', progressPercentage: '50%' },
      { Stack: 'Angular', progressPercentage: '60%' },
      { Stack: 'CI/CD', progressPercentage: '70%' },
      { Stack: 'Agile', progressPercentage: '50%' },
      { Stack: 'JavaScript/jQuery', progressPercentage: '70%' },
      { Stack: 'NLP', progressPercentage: '50%' },
      { Stack: 'Python', progressPercentage: '50%' },
      { Stack: 'Docker', progressPercentage: '50%' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  progressStyle(percentage: string) {
    return { width: percentage };
  }
}
