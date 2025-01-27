import { Component, OnInit } from '@angular/core';
import { GitHubApiService } from './github-api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  user = 'rooshmica'; // Replace with your GitHub username
  projects: any[] = [];

  constructor(private githubApiService: GitHubApiService) {}

  ngOnInit(): void {
    // Fetch pinned repositories
    this.githubApiService.getUserPinnedRepositories(this.user).subscribe(
      (repos) => {
        const projectPromises = repos.map((repo) => {
          return this.githubApiService
            .getRepositoryTopics(this.user, repo.name)
            .toPromise()
            .then((topicsResponse) => {
              return { ...repo, topics: topicsResponse.names };
            });
        });

        Promise.all(projectPromises).then((projectsWithTopics) => {
          this.projects = projectsWithTopics;
          console.log('Pinned Repositories with Topics:', this.projects);
        });
      },
      (error) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }
}
