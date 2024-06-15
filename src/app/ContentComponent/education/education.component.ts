import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface EducationEntry {
  degreeTitle: string;
  description: string;
  institution: string;
  institutionLink: string;
  institutionBranding: string;
  dateRange: string;
  location: string;
}

interface Fellowship {
  title: string;
  dateRange: string; 
}


interface Coursework {
  category: string;
  courses: string[];
}

interface CourseProject {
  id: string;
  title: string;
  supervisor: string;
  institution: string;
  dateRange: string;
  location: string;
  descriptions: string[]; 
  references?: { text: string; link: string }[]; 
  skillsEnhanced?: string[];
}


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  shownDetails: { [projectId: string]: boolean } = {};
  educationEntry!: EducationEntry;  
  fellowships: Fellowship[] = [];
  coursework: Coursework[] = [];
  courseProjects: CourseProject[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/data/education.json').subscribe(data => {
      this.educationEntry = data.education;
      this.fellowships = data.fellowships; 
      this.coursework = data.coursework;
      this.courseProjects = data.projects.map((project: CourseProject) => ({
        ...project,
        id: this.generateSlug(project.title),
        descriptions: project.descriptions
      }));
    });
  }

  toggleDetails(projectId: string) {
    this.shownDetails[projectId] = !this.shownDetails[projectId];
  }

  isProjectDetailsShown(projectId: string): boolean {
    return this.shownDetails[projectId] || false; 
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
