import { Component,OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  greeting= {
    username: "Rooshmica Ramesh",
    title: "Hi All, I'm Rooshmica",
    subTitle: "A passionate Senior Software Developer 🚀 with 6 years of experience crafting and implementing custom solutions. Skilled in end-to-end development, deployment, cloud integration, and AI-driven application optimization. 👨‍💻 I excel at solving complex problems through creative, efficient software solutions, with a focus on integrating cutting-edge AI technologies to enhance performance and scalability. Over the years, I’ve sharpened my expertise in software architecture, cloud computing, and AI-based innovations, collaborating with teams to deliver impactful, high-performance systems that make a tangible difference in the real world.",
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
