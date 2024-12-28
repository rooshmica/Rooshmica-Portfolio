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
    title: "Hi all, I'm Rooshmica",
    subTitle: "A passionate Senior Software Developer 🚀 around 6 years of experience in designing and implementing custom solutions. Expertise in end-to-end development and deployment, cloud integration, and optimizing application performance.",
    resumeLink: "linkedin.com/in/rooshmica-ramesh-76ba9a84"
  }
  constructor() { }

  ngOnInit(): void 
  {
  
  }

}