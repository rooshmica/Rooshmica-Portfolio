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
        desc: "Full Stack Developer with ML Development",
        descBullets: [
          "Developed a REST API using C# with .NET Core and Angular, integrated with Azure for cloud solutions. ",
          "Utilized NGRX for state management ensuring predictable state handling for a high-traffic app serving 1,000+ global users. ",
          "Used SQL and T-SQL for efficient data management and complex queries, supporting data migration and high-traffic app performance. Migrated data from Oracle DB to SQL SERVER and built a new website.",  
          "Delivered maintainable, extensible, reusable, and performant solutions by adhering to fundamental design principles for scalable applications. ",
          "Integrated LLM with the .Net / Angular Applications,Developed NLP based Chat application to answer queries and Image recognition for identity erfification for the users.",
          "Decommission the legacy applications, and server and migrate the data. Build new two Archival application data from scratch resulting in first time right and customer effort reduction by 25% per month",
          "Supported production and deployment activities (CI/CD)",
          "Worked in Agile with CI/CD tools like Git, streamlining development and deployment for migration and new app builds.",
          "Led a team of 5, successfully completed data migration, legacy application decommissioning, and LLM Integration using NLP Chat application development with application data."
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
          "Demonstrated proficiency in converting legacy monolithic architecture to a microservice-based architecture, enhancing system scalability and flexibility.",
          "Developed REST APIs with C# applications and integrated them with an Angular front-end, enhancing user engagement, reducing system latency and security issues, improving page load times and application security",
          "Optimized SQL Queries resulting in a performance boost by 25% Migrated DB from Oracle to SQL independently for full SDLC.",
          "Developed React-Capacitor framework- based AI based Billing applications using image recognition GPT-Vision models and Gemini Models. Used by Major Insurance company in US.",
          "Actively contributed to Grooming, Planning, and Scrum calls, adhering to the SDLC process.",
          "Spearheaded a migration of a large-scale SQL Server database to Azure SQL, resulting in a 20% reduction in infrastructure costs and a 25% improvement in data processing speeds.",
          "Successfully collaborated in Agile sprints, achieving a 95% on time delivery rate.",
          "Developed event-driven architecture using Kafka to process real-time claim transactions and medical data.",
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
          "Developed REST APIs with C# and Angular, led Salesforce integration with OnBase using Microsoft technologies. ",
          "Led Salesforce Integration with OnBase Project, integrating Salesforce Classic and Lightning interfaces using Microsoft technologies.",
          "Optimized License Consumption for Users, reducing license usage for Salesforce to OnBase requests by 45%, leading to significant cost savings",
          "Managed team with deployment activities and supported for migration on Dot Net framework",
          "Gathered requirements and provided technical support to meet client expectations. Aligned Salesforce and OnBase integration with business goals."
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
