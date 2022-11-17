import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService, Project } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';

  constructor(private data: DataService) { }

  fetchUserProjects(){
    this.data.fetchProjects(this.username);
  }

  getUserProjects(): Project[] {
    return this.data.getUserProjects(this.username);
  }

}
