import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  imports: [NgIf, NgFor], 
})
export class TimelineComponent implements AfterViewInit {
  timelineItems = [
    {
      title: 'Votre entreprise ?',
      date: '2024 - présent',
      orga: '',
      desc: `Présentiel en Finistère, hybride ou distanciel dans d'autres départements<br>
      <strong>Développeuse Front-end, Webmaster, SEO, Agile.</strong>`
    },
    {
      title: 'Formation Développement Web',
      date: '2024',
      orga: 'OpenClassrooms',
      desc: `Conception de sites web dynamiques, responsives, création d'API et gestion de bases de données, optimisation des performances, référencement, gestion de projet.`
    },
    {
      title: 'M1 : Théâtre et Culture du monde',
      date: '2012 - 2017',
      orga: 'Université de Franche-Comté',
      desc: `Recherche en sociologie, arts, histoire et anthropologie.`
    },
    {
      title: 'Employée dans la restauration',
      date: '2009 - 2022',
      orga: 'Bretagne, Bourgogne-Franche-Comté',
      desc: `Responsable de salle, cheffe d'équipe et serveuse.`
    }
  ];

  @ViewChildren('timelineCard', { read: ElementRef }) cards!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    this.cards.forEach(card => observer.observe(card.nativeElement));
  }
}