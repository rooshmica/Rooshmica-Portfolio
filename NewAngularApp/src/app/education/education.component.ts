import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "Master of Science",
      duration: "2025",
      subtitle: "Athlone, Co. Westmeath, Ireland",
      content: "Software Design with Artificial Intelligence in TUS: Midlands",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Bachelor of Engineering",
      duration: "2018",
      subtitle: "Anna University, Chennai, India",
      content: "Computer Science & Engineering",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    // {
    //   heading: "High School",
    //   duration: "2014",
    //   subtitle: "Anna University, Chennai, India",
    //   content: "Computer Science",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

