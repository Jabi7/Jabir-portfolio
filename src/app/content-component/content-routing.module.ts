import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponentComponent } from './content-component.component';
import { ResearchComponent } from '../ContentComponent/research/research.component';
import { TechnicalExpertiseComponent } from '../ContentComponent/technical-expertise/technical-expertise.component';

const contentRoutes: Routes = [
  { path: 'research', component: ResearchComponent },
  { path: 'technical-expertise', component: TechnicalExpertiseComponent },
  { path: '', redirectTo: 'research', pathMatch: 'full' } // Default child route
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
