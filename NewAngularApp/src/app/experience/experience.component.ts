import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExperienceCardComponent } from './experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent], // Import ExperienceCardComponent
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Senior Software Developer",
        company: "Cognizant",
        color: "#3781c2",
        companylogo: "../../../assets/images/Cognizant.png",
        date: "Dec 2023 – Sept 2024",
        desc: "Full Stack Developer with ML Engineer",
        descBullets: [
          "Designed and Developed Software Applications, using .NET Core and C# that served more than 5 Million users with high-traffic app serving global users, which improved responsiveness by 50%.",
          "Integrated LLM with the .Net / React Applications,Developed NLP based Chat application to answer queries and Image recognition for identity erfification for the users.",
          "Decommission the legacy applications, and server and migrate the data. Build new two Archival application data from scratch resulting in first time right and customer effort reduction by 25% per month",
          "Supported production and deployment activities (CI/CD)"
        ]
      },
      {
        role: "Senior Software Developer",
        company: "Medusind Solutions",
        color: "#3f703f",
        companylogo: "../../../assets/images/Medusind.png",
        date: "Nov 2020 – Dec 2023",
        desc: "Dot Net Full Stack and AI Development",
        descBullets: [
          "Actively contributed to Grooming, Planning, and Scrum calls, adhering to the SDLC process.",
          "Developed React-Capacitor framework- based AI based Billing applications using image recognition GPT-Vision models and Gemini Models. Used by Major Insurance company in US.",
          "Resolved latency and security issues, improving page load times and application security.",
          "Optimized SQL Queries resulting in a performance boost by 25% Migrated DB from Oracle to SQL independently for full SDLC.",
          "Supported production and deployment activities (CI/CD)"
        ]
      },
      {
        role: "Software Developer",
        company: "Maitri Technology Solutions",
        color: "#ff9102",
        companylogo: "../../../assets/images/MTS.png",
        date: "Nov 2018 – Apr 2020",
        desc: "Software Developer working with Salesforce and Dot Net development",
        descBullets: [
          "Led Salesforce Integration with OnBase Project, integrating Salesforce Classic and Lightning interfaces using Microsoft technologies.",
          "Optimized License Consumption for Users, reducing license usage for Salesforce to OnBase requests by 45%, leading to significant cost savings",
          "Managed team with deployment activities and supported for migration on Dot Net framework"
        ]
      }
    ]
  };

  selectedExperience: any = null; // Track the selected experience

  constructor() {}

  ngOnInit(): void {}

  toggleDetails(experience: any): void {
    this.selectedExperience = this.selectedExperience === experience ? null : experience;
  }
}
