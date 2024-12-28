import { Component,OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  greeting= {
    username: "Rooshmica Kettavarampalayam Ramesh",
    title: "Hi all, I'm Rooshmica",
    subTitle: "A passionate Senior Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
    resumeLink: "linkedin.com/in/rooshmica-ramesh-76ba9a84"
  }

  // Listen for window scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.el.nativeElement.querySelector('.header');

    if (window.pageYOffset > 50) {
      this.renderer.addClass(header, 'scrolled');
    } else {
      this.renderer.removeClass(header, 'scrolled');
    }
  }
}
