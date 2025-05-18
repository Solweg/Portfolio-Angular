import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ExpertiseComponent,
    TimelineComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }


