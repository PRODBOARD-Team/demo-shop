import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CATEGORIES } from "../../data";

@Component({
  selector: 'navbar-default',
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  current = ''
  toggle: boolean = false;
  scroll: boolean = false
  categories = CATEGORIES;

  onChildValueChange(newValue: boolean) {
    this.toggle = newValue;
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.current = window.location.pathname

    const handlerScroll = () => {
      this.scroll = window.scrollY > 50;
    };

    window.addEventListener('scroll', handlerScroll);
  }


}
