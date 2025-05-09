import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from "../../data";

@Component({
  selector: 'footer-default',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  demos: {name:string, link:string}[] = []

  // TODO:
  links = [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Team',
      link: '/team'
    },
    {
      name: 'Portfolio',
      link: '/portfolio-v1'
    },
    {
      name: 'Clients',
      link: '/our-clients'
    },
    {
      name: 'Error',
      link: '/error'
    },
  ]


  year: any

  ngOnInit(): void {
    this.year = new Date().getFullYear()
    this.demos = CATEGORIES.map(x => {
      return {
        name: x.name,
        link: '/' + x.code
      }
    })
  }
}
