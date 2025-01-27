import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.css']
})
export class SoftwareSkillComponent implements OnInit {
  
  skillsSection = {
    softwareSkills: [
      { skillName: "HTML-5", fontAwesomeClassname: "fab fa-html5", color: "#E34F26" },
      { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt", color: "#1572B6" },
      { skillName: "C#.NET", fontAwesomeClassname: "fas fa-code", color: "#f34b7d" },
      { skillName: ".NET Core", fontAwesomeClassname: "fab fa-microsoft", color: "#F25022" },
      { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database", color: "#f29111" },
      { skillName: "Python", fontAwesomeClassname: "fab fa-python", color: "#FFD43B" },
      { skillName: "Angular", fontAwesomeClassname: "fab fa-angular", color: "#DD0031" },
      { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react", color: "#61DBFB" },
      { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft", color: "#0089D6" },
      { skillName: "AWS", fontAwesomeClassname: "fab fa-aws", color: "#FF9900" },
      { skillName: "Docker", fontAwesomeClassname: "fab fa-docker", color: "#2496ED" },
      { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js-square", color: "#F7DF1E" },
      { skillName: "Entity Framework (EF)", fontAwesomeClassname: "fas fa-cubes", color: "#6DB33F" },
      { skillName: "GitHub", fontAwesomeClassname: "fab fa-github", color: "#FFFFFF" },
      { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js", color: "#83CD29" },
      { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js", color: "#3178C6" }
    ]
  };

  constructor() {}

  ngOnInit(): void {}

}
