import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isDarkMode = false; // Reçoit l'état du mode sombre depuis le parent
  @Output() toggleTheme = new EventEmitter<void>(); // Émet un événement pour basculer le thème

  onToggleTheme() {
    this.toggleTheme.emit(); // Notifie le parent de basculer le thème
  }
}