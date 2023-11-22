import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faOrcid } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ContentRoutingModule } from './content-component/content-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { NamePicComponentComponent } from './ProfileComponent/name-pic-component/name-pic-component.component';
import { InfoComponentComponent } from './ProfileComponent/info-component/info-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';


import { ResearchComponent } from './ContentComponent/research/research.component';
import { TechnicalExpertiseComponent } from './ContentComponent/technical-expertise/technical-expertise.component';
import { EntrepreneurshipComponent } from './ContentComponent/entrepreneurship/entrepreneurship.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    NamePicComponentComponent,
    InfoComponentComponent,
    ContentComponentComponent,
    ResearchComponent,
    TechnicalExpertiseComponent,
    EntrepreneurshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components

library.addIcons(faGithub, faLinkedin, faOrcid, faEnvelope);
  }

}
