import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitHubApiService } from '../projects/github-api.service';

@Component({
  selector: 'app-app-github-calendar',
  templateUrl: './app-github-calendar.component.html',
  styleUrls: ['./app-github-calendar.component.css'],
})

export class AppGithubCalendarComponent implements OnInit {
  @Input() username: string = ''; // GitHub username
  contributions: any[] = []; // Array to store each day's contribution data
  monthLabels: string[] = []; // Labels for months
  token: string = ''// Replace with your GitHub token

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeCalendar();
    this.fetchContributions();
  }

 // Generate the calendar structure
 initializeCalendar(): void {
  this.monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const yearStart = new Date('2025-01-01');
  const yearEnd = new Date('2025-12-31');
  let currentDate = yearStart;

  while (currentDate <= yearEnd) {
    this.contributions.push({
      date: currentDate.toISOString().split('T')[0], // Format: YYYY-MM-DD
      contributionLevel: 0, // Default contribution level
    });
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }
}

// Fetch contributions from GitHub GraphQL API
fetchContributions(): void {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  const query = `
    query ($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const body = {
    query,
    variables: {
      username: this.username,
    },
  };

  const url = 'https://api.github.com/graphql';

  this.http.post<any>(url, body, { headers }).subscribe(
    (response) => {
      const weeks = response.data.user.contributionsCollection.contributionCalendar.weeks;
      const contributionMap = new Map<string, number>();

      weeks.forEach((week: any) => {
        week.contributionDays.forEach((day: any) => {
          contributionMap.set(day.date, day.contributionCount);
        });
      });

      // Update contributions array with fetched data
      this.contributions.forEach((day) => {
        const contributions = contributionMap.get(day.date) || 0;
        day.contributionLevel = Math.min(contributions, 5); // Normalize levels (0-5)
      });

      console.log('Fetched Contributions:', this.contributions);
    },
    (error) => {
      console.error('Error fetching contributions:', error);
    }
  );
}
}