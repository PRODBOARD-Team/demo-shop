import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { PlannerComponent } from "../../components/planner/planner.component";
import { CATEGORIES } from "../../data";
import { TemplateCategory } from "../../data/templates";

@Component({
  selector: 'template-planner',
  imports: [
    CommonModule,
    NavbarComponent,
    BreadcrumbsComponent,
    PlannerComponent
],
  templateUrl: './template-planner.component.html',
  styleUrl: './template-planner.component.css'
})
export class TemplatePlannerComponent {

  #category: string;
  category: TemplateCategory;

  constructor(private Router: ActivatedRoute) { }

  ngOnInit(): void {
    this.#category = this.Router.snapshot.params['category'];
    this.category = CATEGORIES.find(x => x.code === this.#category);
  }


}
