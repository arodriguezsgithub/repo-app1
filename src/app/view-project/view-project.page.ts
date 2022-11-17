import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GithubApiService, Project } from '../services/shared/github-api.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.page.html',
  styleUrls: ['./view-project.page.scss'],
})
export class ViewProjectPage implements OnInit {

  project!: Project;
  subscription!: Subscription;

  constructor(
    private githubApiService: GithubApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const reponame = this.activatedRoute.snapshot.paramMap.get('reponame')!;
    const username = this.activatedRoute.snapshot.paramMap.get('username')!;
    this.getProjectByName(username, reponame);
  }

  getProjectByName(username: string, reponame: string){
    this.subscription = this.githubApiService.getProject$(username, reponame).subscribe({
      next: (response: Project) => this.project = response,
      error: (e: any) => console.error(e), 
    })
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  ionViewDidLeave(){
    this.subscription.unsubscribe();
  }

}
