import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Aos from 'aos';
import { CarouselModule } from "ngx-owl-carousel-o";
import { NavbarHomeComponent } from "../../components/navbar-home/navbar-home.component";
import { CATEGORIES } from "../../data";
import { FooterComponent } from "../../components/footer/footer.component";
import { PRODUCTS } from "../../data/products";

@Component({
  imports: [
    CommonModule,
    NavbarHomeComponent,
    RouterLink,
    CarouselModule,
    FooterComponent
],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  categories = CATEGORIES;
  products =PRODUCTS;

  customOptions = {
    loop: true,
    margin: 30,
    nav: true,
    items: 1,
    dots: true,
    autoplay: true,
    responsive: {
      0: { items: 1 }
    }
  }


  ngAfterViewInit(): void {
    Aos.init()
  }

}
