import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent {
  @Input() isDarkMode = false;
}
