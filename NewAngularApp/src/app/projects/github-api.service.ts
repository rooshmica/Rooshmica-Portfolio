import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GitHubApiService {
  private readonly baseUrl = 'https://api.github.com'; 
  private token = environment.githubToken;

  constructor(private http: HttpClient) {}


  // Fetch pinned repositories while excluding forked ones
  getUserPinnedRepositories(username: string): Observable<any[]> {
    const url = `${this.baseUrl}/users/${username}/repos?per_page=6&sort=updated`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any[]>(url, { headers }).pipe(
      map((repos) => repos.filter((repo) => !repo.fork).slice(0, 4)) // Exclude forked repositories
    );
  }

  // Fetch repository topics for a specific repo
  getRepositoryTopics(owner: string, repo: string): Observable<any> {
    const url = `${this.baseUrl}/repos/${owner}/${repo}/topics`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/vnd.github.mercy-preview+json', // Required for topics API
    });
    return this.http.get<any>(url, { headers });
  }
}
