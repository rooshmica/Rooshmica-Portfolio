import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-repo-card',
  templateUrl: './github-repo-card.component.html',
  styleUrls: ['./github-repo-card.component.css']
})
export class GithubRepoCardComponent {
  @Input() github: any; // Ensure 'Input' is properly imported
  @Input() index: number = 0;

  constructor() {}

  onCardClick(): void {
    if (this.github?.node?.url) {
      const win = window.open(this.github.node.url, "_blank");
      if (win) {
        win.focus();
      } else {
        console.error('Failed to open the link in a new tab.');
      }
    } else {
      console.error('Invalid URL or Github data.');
    }
  }
}
