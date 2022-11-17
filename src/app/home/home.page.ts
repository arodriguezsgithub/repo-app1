import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';

import { GithubApiService, Project } from '../services/shared/github-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  projects: Project[] = [];
  username: string = '';
  subscription!: Subscription;

  constructor(private githubApiService: GithubApiService) { }
  
  getUserProjects() {
    this.subscription = this.githubApiService.getUserProjects$(this.username).subscribe({
      next: (response: Project[]) => this.projects = response,
      error: (e: any) => console.error(e),
    })
  }

  clearProjects(){
    this.projects = [];
    this.username = '';
  }

  ionViewDidLeave(){
    this.subscription.unsubscribe();
  }

}
