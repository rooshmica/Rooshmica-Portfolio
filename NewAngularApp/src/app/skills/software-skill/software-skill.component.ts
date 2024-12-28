import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.css']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "C#.NET",
        fontAwesomeClassname: "fas fa-code"
      },
      {
        skillName: "SQL Server",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "Angular",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}

