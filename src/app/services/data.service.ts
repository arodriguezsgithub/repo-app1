import { Injectable } from '@angular/core';
import { Octokit } from "octokit";

export interface Project {
  name: string;
  url: string;
  created_at: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public projects: Project[] = [];

  constructor() { }

  public async fetchProjects(username: string): Promise<any> {
    const octokit = new Octokit({
      auth: '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'
    });;

    try {
        const result = await octokit.request('GET /users/{username}/repos', {
          username: username
        });
      
        const projects: Project[] = result.data.map(project => 
          ({
            name: project.name, 
            url: project.url,
            created_at: project.created_at ? project.created_at : '',
            id: project.id
          })
        )
      
        this.projects = projects;
      
    } catch (error: any) {
        console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
    }
  }

  public getUserProjects(username: string): Project[] {
    return this.projects;
  }

  public getProjectById(id: number): Project | undefined {
    return this.projects.find((project) => {
      return project.id == id;
    })
  }
}
