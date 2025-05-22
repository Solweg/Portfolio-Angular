import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Import du module MatIcon

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule // Ajout du module pour les icônes Material
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}