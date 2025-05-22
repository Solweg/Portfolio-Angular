import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon'; // Import pour les icônes Material

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    ExpertiseComponent,
    TimelineComponent,
    ProjectComponent,
    ContactComponent,
    FooterComponent,
    MatIconModule // Ajout du module pour les icônes Material
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }