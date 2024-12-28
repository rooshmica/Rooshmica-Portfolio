import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/rooshmica/Rooshmica",
    linkedin: "linkedin.com/in/rooshmica-ramesh-76ba9a84",
    gmail: "Roosh97@gmail.com",
    instagram : "https://www.instagram.com/sarthak_goenka/?hl=en"

  };
  constructor() { }

  ngOnInit(): void {
  }

}