import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit 
{
  greeting= {
    username: "Rooshmica Kettavarampalayam Ramesh",
    title: "Hello, Rooshmica Ramesh here",
    subTitle: "A passionate Senior Software Developer 🚀 with 6 years of experience crafting and implementing custom solutions. Skilled in end-to-end development, deployment, cloud integration, and AI-driven application optimization. 👨‍💻 I excel at solving complex problems through creative, efficient software solutions, with a focus on integrating cutting-edge AI technologies to enhance performance and scalability. Over the years, I’ve sharpened my expertise in software architecture, cloud computing, and AI-based innovations, collaborating with teams to deliver impactful, high-performance systems that make a tangible difference in the real world.",
    resumeLink: "https://drive.google.com/file/d/136xo04uY6JlGZ6xCjpHCTbsCzUIM4TI4/view?usp=drive_link"
  }
  constructor() { }

  ngOnInit(): void 
  {
  
  }

}