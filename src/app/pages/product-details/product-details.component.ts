import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Aos from 'aos';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProductData, PRODUCTS } from "../../data/products";
import { BreadcrumbsComponent } from "../../components/breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PlannerComponent } from "../../components/planner/planner.component";

@Component({
  selector: 'product-details',
  imports: [
    RouterLink,
    CommonModule,
    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    PlannerComponent
],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {


  id: number;
  product: ProductData;



  activeImage: number = 1


  constructor(private Router: ActivatedRoute) { }

  ngAfterViewInit(): void {
    Aos.init()
  }


  ngOnInit(): void {
    this.id = parseInt(this.Router.snapshot.params['id'])
    this.product = PRODUCTS.find(item => item.id === this.id)
  }

}
