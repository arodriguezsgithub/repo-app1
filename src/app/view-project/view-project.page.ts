import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Project } from '../services/data.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.page.html',
  styleUrls: ['./view-project.page.scss'],
})
export class ViewProjectPage implements OnInit {
  public project!: Project;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.project = this.data.getProjectById(parseInt(id))!;
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
