import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'], // <-- Corrigé ici (styleUrls avec un "s" et un tableau)
})
export class BannerComponent {
  @Input() isDarkMode = false;
}