import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: [
      "Have a project in mind or just want to say hello? My inbox is always open! I’d love to connect",
      "Whether you have a question, advice, or just want to chat.",
                            "Feel free to reach out!"
    ],
    number: "+353-0894972422",
    email_address: "Roosh97@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
