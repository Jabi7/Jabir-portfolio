import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Manuscript {
  id: string;       // Slug-like ID
  title: string;
  status: string;
  authors: { name: string; format?: "bold" | "italic" | "underline"}[],
  abstract: string;
}

interface Project {
  id: string;
  title: string;
  status: string; 
  supervisor: string;
  institution: string;
  dateRange: string;
  location: string;
  descriptions: string[]; 
  skillsEnhanced: string;
}

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent {
  isMaintenanceMode = false;
  shownAbstracts: { [key: string]: boolean } = {};
  shownDetails: { [key: string]: boolean } = {};

  // research Data 
  manuscripts: Manuscript[] = [];
  projects: Project[] = [];

  
  constructor(private http: HttpClient) {
    // Generate slug-like IDs on component initialization
    this.manuscripts.forEach(manuscript => {
      manuscript.id = this.generateSlug(manuscript.title);
    });
    this.projects.forEach(project => {
      project.id = this.generateSlug(project.title);
    });
  }

  ngOnInit() {
    this.http.get<any>('assets/data/research.json').subscribe(data => {
      this.manuscripts = data.manuscripts.map((m: Manuscript) => ({
        ...m,
        id: this.generateSlug(m.title)
      }));
      this.projects = data.projects.map((p: Project) => ({
        ...p,
        id: this.generateSlug(p.title)
      }));
    });
  }

  toggleAbstract(id: string) {
    this.shownAbstracts[id] = !this.shownAbstracts[id];
  }
  toggleDetails(id: string) {
    this.shownDetails[id] = !this.shownDetails[id];
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
