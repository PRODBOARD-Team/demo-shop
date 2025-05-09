import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";
import { DetailsComponent } from "../../components/details/details.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { InvoiceComponent } from "../../components/invoice/invoice.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { PlannerComponent } from "../../components/planner/planner.component";
import { InfoComponent } from "../../components/info/info.component";
import { CATEGORIES } from "../../data";
import { TemplateCategory, TemplateData } from "../../data/templates";

@Component({
  selector: 'template-details',
  imports: [
    CommonModule,
    NavbarComponent,
    BreadcrumbsComponent,
    DetailsComponent,
    FooterComponent,
    PlannerComponent,
    InfoComponent,
    InvoiceComponent
  ],
  templateUrl: './template-details.component.html',
  styleUrl: './template-details.component.css'
})
export class TemplateDetailsComponent {

  constructor(private router: ActivatedRoute) { }

  #id: string;
  #category: string;

  category: TemplateCategory;
  template: TemplateData;
  activeTab = 1;
  showPlanner = false;


  ngOnInit(): void {
    this.#id = this.router.snapshot.params['id'];
    this.#category = this.router.snapshot.params['category'];
    this.category = CATEGORIES.find(x => x.code === this.#category);
    this.template = this.category.templates.find(item => item.id === this.#id);

    this.router.params.subscribe(p => {
      if(this.#category && this.#category !== p['category'])
        window.location.reload();
      if(this.#id && this.#id !== p['id'])
        window.location.reload();
    })
  }

  // TODO:
  invoice = [{
    image: '/assets/img/gallery/shop-04/shop-01.jpg',
    name: 'Classic Table Lamp1',
    quantity: 1,
    unit: 100,
    total: 100
  },
  {
    image: '/assets/img/gallery/shop-04/shop-01.jpg',
    name: 'Classic Table Lamp1',
    quantity: 3,
    unit: 200,
    total: 600
  }];


}
