import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CATEGORIES } from "../../data";
import { TemplateCategory } from "../../data/templates";


@Component({
  selector: 'kitchens',
  imports: [
    CommonModule,
    NavbarComponent,
    BreadcrumbsComponent,
    GalleryComponent,
    FooterComponent
  ],
  templateUrl: './template-gallery.component.html',
  styleUrl: './template-gallery.component.css'
})
export class TemplateGalleryComponent {

  #category: string;
  category: TemplateCategory;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.#category = this.router.snapshot.params['category'];
    this.category = CATEGORIES.find(x => x.code === this.#category);

    this.router.params.subscribe(p => {
      if (this.#category && this.#category !== p['category'])
        window.location.reload();
    })
  }
}

