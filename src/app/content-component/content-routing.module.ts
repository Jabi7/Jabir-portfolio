// content-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResearchComponent } from '../ContentComponent/research/research.component';
import { TechnicalExpertiseComponent } from '../ContentComponent/technical-expertise/technical-expertise.component';
import { EntrepreneurshipComponent } from '../ContentComponent/entrepreneurship/entrepreneurship.component';
import { EducationComponent } from '../ContentComponent/education/education.component';

const contentRoutes: Routes = [
  { path: 'education', component: EducationComponent},
  { path: 'research', component: ResearchComponent },
  { path: 'technical-expertise', component: TechnicalExpertiseComponent },
  { path: 'entrepreneurship', component: EntrepreneurshipComponent },
  { path: '', redirectTo: 'research', pathMatch: 'full' } // Default child route
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
