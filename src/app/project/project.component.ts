import { Component, Input } from '@angular/core';
import { Project } from '../services/shared/github-api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input()
  project!: Project;
  @Input()
  username!: string;

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
