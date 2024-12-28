import { Component } from '@angular/core';

@Component({
  selector: 'app-app-skill-progress',
  templateUrl: './app-skill-progress.component.html',
  styleUrls: ['./app-skill-progress.component.css']
})
export class AppSkillProgressComponent {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend/Design",
        progressPercentage: "75%"
      },
      {
        Stack: "Backend",
        progressPercentage: "60%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }


}
